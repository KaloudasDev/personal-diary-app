let entries = [];

document.getElementById('add-entry').addEventListener('click', addEntry);

function addEntry() {
    const text = document.getElementById('entry-text').value;
    const tags = document.getElementById('entry-tags').value.split(',').map(tag => tag.trim());
    
    if (text) {
        const entry = { text, tags, date: new Date() };
        entries.push(entry);
        document.getElementById('entry-text').value = '';
        document.getElementById('entry-tags').value = '';
        renderEntries();
    }
}


// Κάνε το κείμενο bold όταν πατάς πάνω σε entry
document.addEventListener('click', function (e) {
    if (e.target && e.target.matches('.entry p')) {
        e.target.style.fontWeight = e.target.style.fontWeight === 'bold' ? 'normal' : 'bold';
    }
});


function renderEntries() {
    const entryList = document.getElementById('entry-list');
    entryList.innerHTML = '';

    entries.forEach((entry, index) => {
        const entryDiv = document.createElement('div');
        entryDiv.classList.add('entry');
        entryDiv.innerHTML = `
            <p>${entry.text}</p>
            <div class="tags">${entry.tags.join(', ')}</div>
            <button onclick="deleteEntry(${index})">Διαγραφή</button>
        `;
        entryList.appendChild(entryDiv);
    });
}

function deleteEntry(index) {
    entries.splice(index, 1);
    renderEntries();
}
