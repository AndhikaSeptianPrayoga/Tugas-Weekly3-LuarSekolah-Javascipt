let slideIndex = 0;
const slides = document.querySelectorAll(".slides");

function showSlide(n) {
    slides.forEach(slide => slide.style.display = "none");
    slides[n].style.display = "block";
}

function changeSlide(n) {
    slideIndex += n;
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    showSlide(slideIndex);
}

function autoSlide() {
    changeSlide(1);
    setTimeout(autoSlide, 2000);
}

showSlide(slideIndex);
setTimeout(autoSlide, 2000);

function toggleMenu() {
    const menu = document.querySelector('.menu');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
}

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    if (name === '' || email === '') {
        alert('Semua kolom harus diisi!');
        return false;
    }
    alert('Terima kasih telah menghubungi kami!');
    return true;
}

function handleScroll() {
    const elements = document.querySelectorAll('.animate');
    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleScroll);

function addBook() {
    const title = document.getElementById('book-title').value;
    const author = document.getElementById('author').value;
    if (title === '' || author === '') {
        alert('Semua kolom harus diisi!');
        return false;
    }
    const bookList = document.getElementById('book-list');
    const listItem = document.createElement('li');
    listItem.textContent = `${title} oleh ${author}`;
    bookList.appendChild(listItem);
    document.getElementById('book-title').value = '';
    document.getElementById('author').value = '';
    return false;
}

const tableData = [
    { judul: "Panduan JavaScript", pembuat: "Andi", tanggal: "2023-01-15" },
    { judul: "Belajar HTML", pembuat: "Dhika", tanggal: "2023-02-10" },
    { judul: "CSS untuk Pemula", pembuat: "Septian", tanggal: "2023-03-05" },
    { judul: "Tips Deployment", pembuat: "Asep", tanggal: "2023-04-20" }
];

function populateTable() {
    const tableBody = document.querySelector("#dataTable tbody");
    tableData.forEach(data => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${data.judul}</td>
            <td>${data.pembuat}</td>
            <td>${data.tanggal}</td>
        `;
        tableBody.appendChild(row);
    });
}

document.addEventListener("DOMContentLoaded", populateTable);

function searchTable() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const rows = document.querySelectorAll("#dataTable tbody tr");

    rows.forEach(row => {
        const cells = row.getElementsByTagName('td');
        let match = false;
        for (let cell of cells) {
            if (cell.innerText.toLowerCase().includes(filter)) {
                match = true;
                break;
            }
        }
        row.style.display = match ? '' : 'none';
    });
}