import fs from 'fs';

export const newDir =async  (dirPath: string) => {
    const exists = await fs.existsSync(dirPath);
    if (!exists){
        await fs.mkdirSync(dirPath);
    }
    else{
        throw new Error(`Directory already exists at this location: ${dirPath}`)
    }
}