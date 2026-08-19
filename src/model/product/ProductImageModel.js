export default class ProductImage {
    constructor(imageId, fileName, mimetype, imageOrder) {
        this.imageId = imageId;
        this.fileName = fileName;
        this.mimetype = mimetype;
        this.imageOrder = imageOrder;
    }

    // Getters e Setters
    setImageId(imageId) { this.imageId = imageId; }
    getImageId() { return this.imageId; }

    setFileName(fileName) { this.fileName = fileName; }
    getFileName() { return this.fileName; }

    setMimetype(mimetype) { this.mimetype = mimetype; }
    getMimetype() { return this.mimetype; }

    setImageOrder(imageOrder) { this.imageOrder = imageOrder; }
    getImageOrder() { return this.imageOrder; }
}