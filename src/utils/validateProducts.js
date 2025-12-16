export const validateProducts = (product, fileRequired=true) => {
    const errors = {};

    if (!product.name.trim()) {
        errors.name = "nombre obligatorio"; 
    }

    if (!product.price || product.price <= 0) {
        errors.price = "precio debe ser mayor a 0";
    }

    if (!product.description.trim()) {
        errors.description = "descripción obligatoria";
    }

    if (!product.category.trim()) {
        errors.category = "categoría obligatoria";
    }
    if (fileRequired && !product.file) {
        errors.file = "imagen obligatoria";
    }
    return errors;
};