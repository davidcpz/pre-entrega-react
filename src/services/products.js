const BASE_URL = 'https://69331c5be5a9e342d271f417.mockapi.io/products';

const createProduct = async (product) => {
    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
    });
    
    if (!res.ok) {
        throw new Error('no se pudo crear el producto');
    }
    const result = await res.json();
    return result;
};

