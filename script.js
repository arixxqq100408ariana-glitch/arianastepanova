// ========== ТОВАРЫ (с правильными категориями) ==========
const products = [
    { 
        id: 1, name: 'Торт "Ягодный микс"', price: 1250, category: 'cake', 
        desc: 'Нежный бисквит, сливочный крем, свежие ягоды и ягодное пюре.', 
        weight: '1 кг', 
        ingredients: 'Мука, яйца, сахар, сливки, клубника, малина, черника',
        image: './img/tort1.webp'
    },
    { 
        id: 2, name: 'Торт "Медовик"', price: 1200, category: 'cake', 
        desc: '5 слоёв, натуральный мёд, сметанный крем. Нежный и ароматный.', 
        weight: '1 кг',
        ingredients: 'Мука, мёд, яйца, сметана, сахар, масло',
        image: './img/medovik1.webp'
    },
    { 
        id: 3, name: 'Круассан с шоколадом', price: 180, category: 'pastry', 
        desc: 'Хрустящий слоёный круассан с шоколадной начинкой.', 
        weight: '80 г',
        ingredients: 'Мука, масло, шоколад, дрожжи, молоко',
        image: './img/krayss1.webp'
    },
    { 
        id: 4, name: 'Печенье "Шоколадное"', price: 120, category: 'cookies', 
        desc: 'Хрустящее печенье с шоколадными каплями. 6 штук в упаковке.', 
        weight: '150 г',
        ingredients: 'Мука, масло, шоколад, яйца, сахар',
        image: './img/pechen1.webp'
    },
    { 
        id: 5, name: 'Чизкейк Нью-Йорк', price: 600, category: 'dessert', 
        desc: 'Классический чизкейк с ягодным соусом.', 
        weight: '300 г',
        ingredients: 'Сливочный сыр, печенье, сливки, яйца, сахар',
        image: './img/chizkeyk1.webp'
    },
    { 
        id: 6, name: 'Наполеон', price: 1300, category: 'cake', 
        desc: 'Хрустящие коржи, нежный заварной крем.', 
        weight: '1 кг',
        ingredients: 'Мука, масло, яйца, молоко, сахар, ваниль',
        image: './img/napaleon11.webp'
    },
    { 
        id: 7, name: 'Эклер с заварным кремом', price: 150, category: 'pastry', 
        desc: 'Нежный эклер с классическим заварным кремом.', 
        weight: '70 г',
        ingredients: 'Мука, масло, яйца, молоко, сахар, ваниль',
        image: './img/ekler1.webp'
    },
    { 
        id: 8, name: 'Кекс малиновый', price: 280, category: 'dessert', 
        desc: 'Влажный кекс со свежей малиной и белым шоколадом.', 
        weight: '250 г',
        ingredients: 'Мука, масло, яйца, малина, сахар, белый шоколад',
        image: './img/keks1.webp'
    },
    { 
        id: 9, name: 'Синнабон с корицей', price: 220, category: 'pastry', 
        desc: 'Мягкая булочка с корицей и сливочным кремом.', 
        weight: '120 г',
        ingredients: 'Мука, масло, корица, сахар, сливочный сыр',
        image: './img/sinabon1.webp'
    },
    { 
        id: 10, name: 'Макарун клубничный', price: 250, category: 'cookies', 
        desc: 'Нежное миндальное печенье с клубничным кремом.', 
        weight: '50 г',
        ingredients: 'Миндаль, яйца, сахар, клубника, сливки',
        image: './img/macaron1.webp'
    },
    { 
        id: 11, name: 'Пирог "Шарлотка"', price: 450, category: 'dessert', 
        desc: 'Классический яблочный пирог с корицей.', 
        weight: '400 г',
        ingredients: 'Яблоки, мука, яйца, сахар, корица',
        image: './img/sharlotka1.webp'
    },
    { 
        id: 12, name: 'Булочка с маком', price: 90, category: 'pastry', 
        desc: 'Сдобная булочка с маковой начинкой и глазурью.', 
        weight: '90 г',
        ingredients: 'Мука, мак, масло, яйца, сахар, ваниль',
        image: './img/bulka1.webp'
    },
    { 
        id: 13, name: 'Тирамису', price: 550, category: 'dessert', 
        desc: 'Итальянский десерт с маскарпоне и кофе.', 
        weight: '250 г',
        ingredients: 'Маскарпоне, савоярди, кофе, яйца, сахар, какао',
        image: './img/tiramisy1.webp'
    },
    { 
        id: 14, name: 'Печенье "Овсяное"', price: 80, category: 'cookies', 
        desc: 'Полезное овсяное печенье с изюмом.', 
        weight: '200 г',
        ingredients: 'Овсяные хлопья, мука, масло, изюм, корица',
        image: './img/ovsu1.webp'
    }
];

// Рекомендуемые товары (только 4 для главной страницы)
const featuredProductsIds = [1, 5, 6, 8];

// ========== КОРЗИНА ==========
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

function updateCartCounter() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll('#cart-count').forEach(c => { if(c) c.innerText = totalItems; });
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCounter();
}

function addToCart(productId, quantity) {
    const existing = cart.find(item => item.id === productId);
    if(existing) existing.quantity += quantity;
    else cart.push({ id: productId, quantity: quantity });
    saveCart();
    alert('Товар добавлен в корзину');
}

// ========== ОТРИСОВКА КАРТОЧЕК ==========
function renderProducts(containerId, filterCategory = 'all', isFeatured = false) {
    const container = document.getElementById(containerId);
    if(!container) return;
    
    let filtered = filterCategory === 'all' ? products : products.filter(p => p.category === filterCategory);
    
    if(isFeatured) {
        filtered = products.filter(p => featuredProductsIds.includes(p.id));
    }
    
    container.innerHTML = filtered.map(product => `
        <div class="product-card" data-id="${product.id}" onclick="location.href='product.html?id=${product.id}'">
            <img class="product-img" src="${product.image}" alt="${product.name}" 
                 onerror="this.src='https://via.placeholder.com/300x200?text=Выпечка'">
            <div class="product-img-divider"></div>
            <div class="product-info">
                <div class="product-title">${product.name}</div>
                <div class="product-price">${product.price} ₽</div>
                <div class="product-desc">${product.desc.substring(0, 50)}...</div>
            </div>
        </div>
    `).join('');
}

// ========== СТРАНИЦА ТОВАРА ==========
function renderProductPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === productId);
    
    if(!product) {
        document.getElementById('product-content').innerHTML = '<p>Товар не найден</p><a href="catalog.html">Вернуться в каталог</a>';
        return;
    }
    
    let quantity = 1;
    
    document.getElementById('product-content').innerHTML = `
        <img class="product-hero-img" src="${product.image}" onerror="this.src='https://via.placeholder.com/400x280'">
        <h1 class="product-page-title">${product.name}</h1>
        <div class="product-page-price">${product.price} ₽</div>
        <div class="product-weight">Вес: ${product.weight}</div>
        <div class="product-ingredients">Состав: ${product.ingredients}</div>
        <div class="product-page-desc">${product.desc}</div>
        <div class="product-page-actions">
            <div class="product-page-quantity">
                <button class="qty-btn-page" id="minusBtn">-</button>
                <span class="qty-value-page" id="qtyValue">1</span>
                <button class="qty-btn-page" id="plusBtn">+</button>
            </div>
            <button class="add-to-cart-page" id="addToCartBtn">В корзину</button>
        </div>
        <a href="catalog.html" class="back-to-catalog">← Назад в каталог</a>
    `;
    
    document.getElementById('minusBtn').addEventListener('click', () => {
        if(quantity > 1) {
            quantity--;
            document.getElementById('qtyValue').innerText = quantity;
        }
    });
    
    document.getElementById('plusBtn').addEventListener('click', () => {
        quantity++;
        document.getElementById('qtyValue').innerText = quantity;
    });
    
    document.getElementById('addToCartBtn').addEventListener('click', () => {
        addToCart(product.id, quantity);
    });
}

// ========== КОРЗИНА ==========
function renderCart() {
    const container = document.getElementById('cart-items');
    const totalSpan = document.getElementById('cart-total');
    if(!container) return;
    
    if(cart.length === 0) {
        container.innerHTML = '<p style="text-align:center; padding:40px;">Корзина пуста</p>';
        if(totalSpan) totalSpan.innerText = 'Общая сумма: 0 ₽';
        return;
    }
    
    let total = 0;
    let html = '';
    cart.forEach(cartItem => {
        const product = products.find(p => p.id === cartItem.id);
        if(product) {
            const itemTotal = product.price * cartItem.quantity;
            total += itemTotal;
            html += `
                <div class="cart-item">
                    <img class="cart-item-img" src="${product.image}" onerror="this.src='https://via.placeholder.com/70'">
                    <div class="cart-item-info">
                        <div class="cart-item-title">${product.name}</div>
                        <div>${product.price} ₽ x ${cartItem.quantity} = ${itemTotal} ₽</div>
                    </div>
                    <button class="cart-item-remove" data-id="${cartItem.id}">Удалить</button>
                </div>
            `;
        }
    });
    container.innerHTML = html;
    if(totalSpan) totalSpan.innerText = `Общая сумма: ${total} ₽`;
    
    document.querySelectorAll('.cart-item-remove').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            cart = cart.filter(item => item.id !== id);
            saveCart();
            renderCart();
        });
    });
}

// ========== ЛИЧНЫЙ КАБИНЕТ ==========
function renderAccount() {
    const userInfoDiv = document.getElementById('user-info');
    const authFormsDiv = document.getElementById('auth-forms');
    if(!userInfoDiv) return;
    
    if(currentUser) {
        userInfoDiv.style.display = 'block';
        authFormsDiv.style.display = 'none';
        document.getElementById('username').innerText = currentUser.name;
        document.getElementById('user-email').innerText = currentUser.email;
        
        const ordersContainer = document.getElementById('orders-list');
        if(ordersContainer) {
            let userOrders = JSON.parse(localStorage.getItem(`orders_${currentUser.login}`)) || [];
            if(userOrders.length === 0) ordersContainer.innerHTML = '<p>У вас пока нет заказов</p>';
            else ordersContainer.innerHTML = userOrders.map(order => `<div class="order-item">Заказ №${order.id} - ${order.date} на сумму ${order.total} ₽</div>`).join('');
        }
    } else {
        userInfoDiv.style.display = 'none';
        authFormsDiv.style.display = 'block';
    }
}

function initAuth() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    if(loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const login = loginForm.querySelector('input[type="text"]').value;
            const password = loginForm.querySelector('input[type="password"]').value;
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const user = users.find(u => u.login === login && u.password === password);
            if(user) { currentUser = user; localStorage.setItem('currentUser', JSON.stringify(currentUser)); renderAccount(); }
            else alert('Неверный логин или пароль');
        });
    }
    if(registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const inputs = registerForm.querySelectorAll('input');
            if(inputs[3].value !== inputs[4].value) { alert('Пароли не совпадают'); return; }
            const users = JSON.parse(localStorage.getItem('users')) || [];
            if(users.find(u => u.login === inputs[2].value)) { alert('Логин занят'); return; }
            const newUser = { name: inputs[0].value, email: inputs[1].value, login: inputs[2].value, password: inputs[3].value };
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            currentUser = newUser;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            renderAccount();
        });
    }
    document.getElementById('logout')?.addEventListener('click', () => { currentUser = null; localStorage.removeItem('currentUser'); renderAccount(); });
}

// ========== ФИЛЬТРЫ ==========
function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    if(filterBtns.length) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const filter = btn.dataset.filter;
                renderProducts('catalog-products', filter, false);
            });
        });
    }
}

// ========== БУРГЕР-МЕНЮ ==========
function initBurgerMenu() {
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('.mobile-nav');
    if(burger && nav) {
        burger.addEventListener('click', (e) => { e.stopPropagation(); nav.classList.toggle('active'); });
        document.addEventListener('click', (e) => { if(nav.classList.contains('active') && !nav.contains(e.target) && !burger.contains(e.target)) nav.classList.remove('active'); });
    }
}

// ========== АДМИН-ПАНЕЛЬ ==========
const ADMIN_CREDENTIALS = { login: 'admin', password: 'admin123' };
let isAdminLoggedIn = false;

function checkAdminAuth() {
    const savedAdmin = localStorage.getItem('adminLoggedIn');
    if(savedAdmin === 'true') {
        isAdminLoggedIn = true;
        showAdminPanel();
    }
}

function showAdminPanel() {
    const loginSection = document.getElementById('admin-login-section');
    const panel = document.getElementById('admin-panel');
    if(loginSection) loginSection.style.display = 'none';
    if(panel) panel.style.display = 'block';
    isAdminLoggedIn = true;
    localStorage.setItem('adminLoggedIn', 'true');
    loadAdminStats();
    renderAdminProducts();
    renderAdminUsers();
    renderAdminOrders();
}

function hideAdminPanel() {
    const loginSection = document.getElementById('admin-login-section');
    const panel = document.getElementById('admin-panel');
    if(loginSection) loginSection.style.display = 'block';
    if(panel) panel.style.display = 'none';
    isAdminLoggedIn = false;
    localStorage.removeItem('adminLoggedIn');
}

function loadAdminStats() {
    const totalProductsEl = document.getElementById('total-products');
    const totalUsersEl = document.getElementById('total-users');
    const totalOrdersEl = document.getElementById('total-orders');
    
    if(totalProductsEl) totalProductsEl.innerText = products.length;
    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if(totalUsersEl) totalUsersEl.innerText = users.length;
    
    let totalOrders = 0;
    users.forEach(user => {
        const orders = JSON.parse(localStorage.getItem(`orders_${user.login}`)) || [];
        totalOrders += orders.length;
    });
    if(totalOrdersEl) totalOrdersEl.innerText = totalOrders;
}

function getCategoryName(cat) {
    const categories = {
        'cake': 'Торт',
        'dessert': 'Десерт',
        'pastry': 'Пирожное',
        'cookies': 'Печенье'
    };
    return categories[cat] || 'Другое';
}

function renderAdminProducts(searchTerm = '') {
    const container = document.getElementById('admin-products-list');
    if(!container) return;
    
    let filtered = [...products];
    if(searchTerm) {
        filtered = products.filter(p => 
            p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.desc.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    
    if(filtered.length === 0) {
        container.innerHTML = '<p style="text-align:center; padding:20px;">Товары не найдены</p>';
        return;
    }
    
    container.innerHTML = filtered.map(product => `
        <div class="admin-product-item" data-id="${product.id}">
            <img class="admin-product-img" src="${product.image}" onerror="this.src='https://via.placeholder.com/60'">
            <div class="admin-product-info">
                <div class="admin-product-name">${product.name}</div>
                <div class="admin-product-price">${product.price} ₽ | ${product.weight || '300 г'}</div>
                <div class="admin-product-category">${getCategoryName(product.category)}</div>
            </div>
            <div class="admin-product-actions">
                <button class="admin-edit-btn" onclick="editProduct(${product.id})">Изменить</button>
                <button class="admin-delete-btn" onclick="deleteProduct(${product.id})">Удалить</button>
            </div>
        </div>
    `).join('');
}

function deleteProduct(id) {
    if(confirm('Удалить этот товар?')) {
        const index = products.findIndex(p => p.id === id);
        if(index !== -1) {
            products.splice(index, 1);
            renderAdminProducts();
            renderProducts('catalog-products', 'all', false);
            renderProducts('featured-products', 'all', true);
            loadAdminStats();
            alert('Товар удалён');
        }
    }
}

function editProduct(id) {
    const product = products.find(p => p.id === id);
    if(!product) return;
    
    const modalHtml = `
        <div class="admin-edit-modal active" id="editModal">
            <div class="admin-edit-content">
                <h3>Редактировать товар</h3>
                <div class="admin-form-group">
                    <label>Название</label>
                    <input type="text" id="edit-name" value="${product.name.replace(/"/g, '&quot;')}">
                </div>
                <div class="admin-form-group">
                    <label>Цена (₽)</label>
                    <input type="number" id="edit-price" value="${product.price}">
                </div>
                <div class="admin-form-group">
                    <label>Вес</label>
                    <input type="text" id="edit-weight" value="${product.weight || '300 г'}">
                </div>
                <div class="admin-form-group">
                    <label>Категория</label>
                    <select id="edit-category">
                        <option value="cake" ${product.category === 'cake' ? 'selected' : ''}>Торт</option>
                        <option value="dessert" ${product.category === 'dessert' ? 'selected' : ''}>Десерт</option>
                        <option value="pastry" ${product.category === 'pastry' ? 'selected' : ''}>Пирожное</option>
                        <option value="cookies" ${product.category === 'cookies' ? 'selected' : ''}>Печенье</option>
                    </select>
                </div>
                <div class="admin-form-group">
                    <label>Состав</label>
                    <textarea id="edit-ingredients" rows="2">${product.ingredients || ''}</textarea>
                </div>
                <div class="admin-form-group">
                    <label>Описание</label>
                    <textarea id="edit-desc" rows="3">${product.desc.replace(/"/g, '&quot;')}</textarea>
                </div>
                <div class="admin-form-group">
                    <label>Фото URL</label>
                    <input type="text" id="edit-image" value="${product.image}">
                </div>
                <button class="admin-submit-btn" onclick="saveProductEdit(${id})">Сохранить</button>
                <button class="admin-logout-btn" style="margin-top:10px;" onclick="closeEditModal()">Отмена</button>
            </div>
        </div>
    `;
    
    let existingModal = document.getElementById('editModal');
    if(existingModal) existingModal.remove();
    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function closeEditModal() {
    const modal = document.getElementById('editModal');
    if(modal) modal.remove();
}

function saveProductEdit(id) {
    const product = products.find(p => p.id === id);
    if(product) {
        product.name = document.getElementById('edit-name').value;
        product.price = parseInt(document.getElementById('edit-price').value);
        product.weight = document.getElementById('edit-weight').value;
        product.category = document.getElementById('edit-category').value;
        product.ingredients = document.getElementById('edit-ingredients').value;
        product.desc = document.getElementById('edit-desc').value;
        product.image = document.getElementById('edit-image').value;
        
        renderAdminProducts();
        renderProducts('catalog-products', 'all', false);
        renderProducts('featured-products', 'all', true);
        closeEditModal();
        alert('Товар обновлён');
    }
}

function renderAdminUsers() {
    const container = document.getElementById('admin-users-list');
    if(!container) return;
    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    if(users.length === 0) {
        container.innerHTML = '<p style="text-align:center; padding:20px;">Нет зарегистрированных пользователей</p>';
        return;
    }
    
    container.innerHTML = users.map(user => `
        <div class="admin-user-item">
            <div class="admin-user-name">${user.name}</div>
            <div class="admin-user-email">${user.email}</div>
            <div class="admin-user-login">Логин: ${user.login}</div>
            <button class="admin-delete-user" onclick="deleteUser('${user.login}')">Удалить пользователя</button>
        </div>
    `).join('');
}

function deleteUser(login) {
    if(confirm(`Удалить пользователя ${login}?`)) {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users = users.filter(u => u.login !== login);
        localStorage.setItem('users', JSON.stringify(users));
        
        localStorage.removeItem(`orders_${login}`);
        
        if(currentUser && currentUser.login === login) {
            currentUser = null;
            localStorage.removeItem('currentUser');
            renderAccount();
        }
        
        renderAdminUsers();
        loadAdminStats();
        alert('Пользователь удалён');
    }
}

function renderAdminOrders() {
    const container = document.getElementById('admin-orders-list');
    if(!container) return;
    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    let allOrders = [];
    
    users.forEach(user => {
        const orders = JSON.parse(localStorage.getItem(`orders_${user.login}`)) || [];
        orders.forEach(order => {
            allOrders.push({
                ...order,
                userName: user.name,
                userLogin: user.login
            });
        });
    });
    
    if(allOrders.length === 0) {
        container.innerHTML = '<p style="text-align:center; padding:20px;">Нет заказов</p>';
        return;
    }
    
    allOrders.sort((a, b) => b.id - a.id);
    
    container.innerHTML = allOrders.map(order => `
        <div class="admin-order-item">
            <div class="admin-order-id">Заказ №${order.id}</div>
            <div class="admin-order-details">${order.userName} (${order.userLogin})</div>
            <div class="admin-order-details">${order.date}</div>
            <div class="admin-order-details">Сумма: ${order.total} ₽</div>
            <div class="admin-order-details">Товаров: ${order.items.length} шт</div>
        </div>
    `).join('');
}

function initAdminPanel() {
    const form = document.getElementById('add-product-form');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const newProduct = {
                id: Date.now(),
                name: document.getElementById('new-title').value,
                price: parseInt(document.getElementById('new-price').value),
                weight: document.getElementById('new-weight').value || '300 г',
                category: document.getElementById('new-category').value,
                ingredients: document.getElementById('new-ingredients').value || 'Мука, яйца, сахар, масло',
                desc: document.getElementById('new-desc').value,
                image: document.getElementById('new-image').value || 'https://via.placeholder.com/300x200?text=Новинка'
            };
            products.push(newProduct);
            renderAdminProducts();
            renderProducts('catalog-products', 'all', false);
            renderProducts('featured-products', 'all', true);
            loadAdminStats();
            form.reset();
            alert('Товар добавлен');
            
            const productsTab = document.querySelector('[data-tab="products"]');
            if(productsTab) productsTab.click();
        });
    }
}

function initAdminTabs() {
    const tabs = document.querySelectorAll('.admin-tab');
    if(tabs.length) {
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                document.querySelectorAll('.admin-tab-content').forEach(content => content.classList.remove('active'));
                const tabId = document.getElementById(`tab-${tab.dataset.tab}`);
                if(tabId) tabId.classList.add('active');
            });
        });
    }
    
    const searchInput = document.getElementById('search-products');
    if(searchInput) {
        searchInput.addEventListener('input', (e) => {
            renderAdminProducts(e.target.value);
        });
    }
}

function initAdminLogin() {
    const loginBtn = document.getElementById('admin-login-btn');
    if(loginBtn) {
        loginBtn.addEventListener('click', () => {
            const login = document.getElementById('admin-login').value;
            const password = document.getElementById('admin-password').value;
            if(login === ADMIN_CREDENTIALS.login && password === ADMIN_CREDENTIALS.password) {
                showAdminPanel();
            } else {
                alert('Неверный логин или пароль\n\nЛогин: admin\nПароль: admin123');
            }
        });
    }
    
    const logoutBtn = document.getElementById('admin-logout-btn');
    if(logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            hideAdminPanel();
        });
    }
}

// ========== ЗАПУСК ==========
document.addEventListener('DOMContentLoaded', () => {
    updateCartCounter();
    initBurgerMenu();
    renderProducts('featured-products', 'all', true);
    renderProducts('catalog-products', 'all', false);
    renderCart();
    renderAccount();
    initAuth();
    initFilters();
    
    // Админка
    checkAdminAuth();
    initAdminLogin();
    initAdminTabs();
    initAdminPanel();
    
    if(document.getElementById('product-content')) renderProductPage();
    
    document.getElementById('checkout')?.addEventListener('click', () => {
        if(!currentUser) { alert('Войдите в аккаунт'); return; }
        if(cart.length === 0) { alert('Корзина пуста'); return; }
        let total = cart.reduce((sum, item) => sum + (products.find(p => p.id === item.id)?.price || 0) * item.quantity, 0);
        const orders = JSON.parse(localStorage.getItem(`orders_${currentUser.login}`)) || [];
        orders.push({ id: Date.now(), date: new Date().toLocaleDateString(), total: total, items: [...cart] });
        localStorage.setItem(`orders_${currentUser.login}`, JSON.stringify(orders));
        cart = [];
        saveCart();
        renderCart();
        renderAccount();
        alert('Заказ оформлен! Спасибо!');
    });
});