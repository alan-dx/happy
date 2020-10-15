import multer from 'multer';
import path from 'path';

export default {
    storage: multer.diskStorage({//Para armazenar as imagens np disco
        destination: path.join(__dirname, "..", "..", "uploads"),//diretorio do local onde serão salva as imagens
        filename: (request, file, cb) => {//Modificar o nome do arquivo para evitar conflitos
            const fileName = `${Date.now()}-${file.originalname}`

            cb(null, fileName);
        }
    })
}