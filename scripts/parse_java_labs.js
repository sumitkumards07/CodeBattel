const fs = require('fs');
const path = require('path');

const javaLabsDir = path.join(__dirname, '../tmp-java-labs/src/main/java/com/chaicode');
const outputFile = path.join(__dirname, '../data/java-labs-curriculum.json');

const categories = [
    'variables', 'operators', 'conditionals', 'forloop', 'whileloop',
    'dowhileloop', 'scanner', 'methods', 'arrays', 'strings'
];

let globalOrder = 1;
const lessons = [];

categories.forEach(category => {
    const categoryPath = path.join(javaLabsDir, category);
    if (!fs.existsSync(categoryPath)) return;
    
    const files = fs.readdirSync(categoryPath).filter(f => f.endsWith('.java'));
    
    files.forEach(file => {
        const filePath = path.join(categoryPath, file);
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Extract Javadoc as instructions
        const javadocMatch = content.match(/\/\*\*([\s\S]*?)\*\//);
        let instructions = '';
        let title = file.replace('.java', '');
        let description = `Practice ${category} concepts in Java.`;
        
        if (javadocMatch) {
            const rawDoc = javadocMatch[1];
            // Split and clean
            const lines = rawDoc.split('\n').map(l => l.replace(/^\s*\*\s?/, '').trim()).filter(l => l);
            if (lines.length > 0) {
                title = lines[0]; // First line as title
                instructions = lines.join('\n\n').replace(/<p>/g, '').replace(/<\/p>/g, '').replace(/<ul>/g, '').replace(/<\/ul>/g, '').replace(/<li>/g, '- ').replace(/<\/li>/g, '').replace(/<pre>/g, '```').replace(/<\/pre>/g, '```');
            }
        }
        
        lessons.push({
            id: file.replace('.java', '').toLowerCase(),
            title: title,
            description: description,
            tags: ["Java", category],
            order: globalOrder++,
            files: {
                [`/${file}`]: content
            },
            category: category,
            instructions: `## ${title}\n\n${instructions}`
        });
    });
});

const outputData = { lessons };
fs.writeFileSync(outputFile, JSON.stringify(outputData, null, 2));
console.log(`Generated ${lessons.length} lessons in ${outputFile}`);
