// Example JavaScript code
// You can use JavaScript to fetch job data from a server and dynamically populate the job listings.

// Example function to fetch job data (using dummy data)
function fetchJobData() {
    return [
        { title: "Web Developer", company: "ABC Corp", location: "New York", description: "Lorem ipsum..." },
        { title: "Graphic Designer", company: "XYZ Inc", location: "Los Angeles", description: "Lorem ipsum..." },
        // Add more job objects here
    ];
}

// Example function to display job listings
function displayJobListings(jobs) {
    const main = document.querySelector('main');
    main.innerHTML = ''; // Clear previous listings
    jobs.forEach(job => {
        const jobElement = document.createElement('div');
        jobElement.classList.add('job');
        jobElement.innerHTML = `
            <h2>${job.title}</h2>
            <p>${job.company} - ${job.location}</p>
            <p>${job.description}</p>
        `;
        main.appendChild(jobElement);
    });
}

// Example usage
const jobs = fetchJobData();
displayJobListings(jobs);
