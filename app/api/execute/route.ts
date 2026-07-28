import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs/promises';
import path from 'path';
import os from 'os';

const execAsync = promisify(exec);

export async function POST(req: Request) {
    try {
        const { source_code } = await req.json();

        if (!source_code) {
            return NextResponse.json({ error: 'Source code is required' }, { status: 400 });
        }

        // Create a temporary directory
        const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'java-run-'));
        const filePath = path.join(tempDir, 'Main.java');

        try {
            // Write source code to Main.java
            await fs.writeFile(filePath, source_code);

            // Compile and run the code
            const { stdout, stderr } = await execAsync(`cd ${tempDir} && javac Main.java && java Main`, {
                timeout: 5000 // 5 seconds timeout
            });

            return NextResponse.json({
                stdout: stdout,
                stderr: stderr,
                compile_output: '',
                status: { id: 3, description: 'Accepted' } // Mock Judge0 success status
            });
        } catch (execError: any) {
            // Check if it's a compilation error or runtime error
            return NextResponse.json({
                stdout: execError.stdout || '',
                stderr: execError.stderr || '',
                compile_output: execError.stderr || '',
                status: { id: 11, description: 'Compilation Error / Runtime Error' }
            });
        } finally {
            // Clean up temporary directory
            await fs.rm(tempDir, { recursive: true, force: true }).catch(console.error);
        }

    } catch (error: any) {
        console.error("Execution API Error:", error);
        return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
    }
}
