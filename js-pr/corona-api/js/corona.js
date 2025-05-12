document.getElementById('btn').addEventListener('click', () => {
    let searchDate = document.getElementById('date').value;
    let showModel = document.getElementById('showModel');

    if (!searchDate) {
        alert("Please select a valid date.");
        return;
    }

    fetch("https://api.rootnet.in/covid19-in/stats/history")
        .then((res) => res.json())
        .then((res) => {
            let singleRec = res.data.find((rec) => rec.day === searchDate);
            if (!singleRec) {
                alert('No data available for the selected date. Please choose a valid date.');
                showModel.innerHTML = '';
                return;
            }

            if (new Date(searchDate) < new Date("2020-01-01")) {
                alert('No COVID-19 data available for this year. Please select a valid date from 2020 onwards.');
                showModel.innerHTML = '';
                return;
            }

            showModel.innerHTML = ''; 
            singleRec.regional.forEach(rec => {
                let card = document.createElement('div');
                card.className = 'card';

                card.innerHTML = `
                    <h3>${rec.loc}</h3>
                    <p><strong>Confirmed:</strong> ${rec.totalConfirmed}</p>
                    <p><strong>Deaths:</strong> ${rec.deaths}</p>
                    <p><strong>Recovered:</strong> ${rec.discharged}</p>
                `;

                showModel.appendChild(card);
            });
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        });
});
