import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = './public';
// Buscar archivos que empiecen con zen- y terminen en png, jpg o jpeg
const files = fs.readdirSync(publicDir).filter(file => file.match(/^zen-.*\.(png|jpg|jpeg)$/i));

if (files.length === 0) {
  console.log('No se encontraron imágenes "zen-mockup" o "zen-panels" (png/jpg) en la carpeta public/.');
  console.log('Por favor asegúrate de guardar las imágenes ahí con los nombres "zen-mockup.png" y "zen-panels.png".');
}

async function optimizeImages() {
  for (const file of files) {
    const filePath = path.join(publicDir, file);
    const cleanName = file.substring(0, file.lastIndexOf('.'));
    const outPath = path.join(publicDir, `${cleanName}.webp`);
    
    console.log(`Optimizando ${file} a ${cleanName}.webp...`);
    try {
      await sharp(filePath)
        .resize({ width: 1920, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(outPath);
        
      console.log(`✅ Guardado exitosamente: ${outPath}`);
      // Eliminar original para mantener la carpeta limpia
      fs.unlinkSync(filePath);
    } catch (err) {
      console.error(`❌ Error procesando ${file}:`, err);
    }
  }
}

optimizeImages();
