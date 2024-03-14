// Array para armazenar os produtos
let products = [];

// Função para adicionar um novo produto
function addProduct(name, quantity) {
    const product = {
        name: name,
        quantity: parseInt(quantity)
    };
    products.push(product);
}

// Função para atualizar a lista de estoque na página
function updateStockList() {
    const stockList = document.getElementById("stockList");
    stockList.innerHTML = "";
    
    products.forEach(product => {
        const li = document.createElement("li");
        li.textContent = `${product.name} - Quantidade: ${product.quantity}`;
        if (product.quantity <= 3) {
            li.classList.add("alert");
        }
        stockList.appendChild(li);
    });
}

document.getElementById("addProductForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const productName = document.getElementById("productName").value;
    const quantity = document.getElementById("quantity").value;

    if (productName && quantity) {
        addProduct(productName, quantity);
        updateStockList();
        document.getElementById("addProductForm").reset();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});
