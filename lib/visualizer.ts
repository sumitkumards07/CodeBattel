import fs from 'fs';
import path from 'path';

export interface Lesson {
  slug: string;
  category: string;
  title: string;
  leetcode?: { number: number; url: string; difficulty: "Easy" | "Medium" | "Hard" };
  companies?: string[];
  oneLiner: string;
  problemStatement: string;
  sequence: (string | number)[];
  phases: {
    label: string;
    complexity: { time: string; space: string };
    pseudocode: string[];
    steps: {
      pointers: Record<string, number>;
      highlightLine: number;
      state: Record<string, string | number>;
      narration: string;
    }[];
  }[];
}

const CONTENT_DIR = path.join(process.cwd(), 'data', 'content');

export function getCategories(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs.readdirSync(CONTENT_DIR).filter(file => {
    return fs.statSync(path.join(CONTENT_DIR, file)).isDirectory();
  });
}

export function getLessonsByCategory(category: string): Lesson[] {
  const categoryPath = path.join(CONTENT_DIR, category);
  if (!fs.existsSync(categoryPath)) return [];
  
  const files = fs.readdirSync(categoryPath).filter(f => f.endsWith('.json'));
  const lessons: Lesson[] = files.map(file => {
    const filePath = path.join(categoryPath, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(content) as Lesson;
  });
  
  return lessons;
}

export function getLesson(category: string, slug: string): Lesson | null {
  const filePath = path.join(CONTENT_DIR, category, `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  
  const content = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(content) as Lesson;
}
