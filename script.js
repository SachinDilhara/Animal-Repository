document.addEventListener('DOMContentLoaded', function () {
    const tableBody = d3.select('#data-table tbody');

    fetch('https://drive.google.com/file/d/1kdZVXQOe4-vMhTLZA72KxJ-0H12S3uSA/view?usp=sharing')
        .then(response => response.json())
        .then(data => {
            const animals = data.Animal;

            Object.keys(animals).forEach(animalId => {
                const animal = animals[animalId];
                const row = tableBody.append('tr');
                row.append('td').text(animalId);
                row.append('td').text(animal.Name);
                row.append('td').text(animal.Habitats);
                row.append('td').text(animal.Conservation_Status);
            });
        })
        .catch(error => console.error('Error loading JSON:', error));
});