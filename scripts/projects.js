console.log("Projects page script loaded.");

const filterButtons = document.querySelectorAll('.filter-btn');
const projectList = document.querySelector('.project-list');
const filterCounter = document.getElementById('filter-counter');
const currentPage = window.location.pathname.split("/").pop();


const projects = [
{
id: 1,
title: "Blast from the Past",
description: "An non violent movement shooter game built for time trails and exploration. This is my biggest solo project yet.",
category: "Game",
technologies: ["Unity", "C#"],
image: "assets/blastfromthepast_pro.jpg",
link: "https://example.com"
},
{
id: 2,
title: "Bug-Bug",
description: "A quirky multiplayer game featuring unique coop ball rolling mechanics. I was one of the lead game designers and was responsible of VFX in this 12-person project.",
category: "Game",
technologies: ["Unity", "C#"],
image: "assets/bugbug_pro.png",
link: "https://alltimefelix.itch.io/bugbug-a-po-op-game"
},
{
id: 3,
title: "Arm the farm",
description: "A tower defense game with farming elements. Responsible for core gameplay programming and overall game design direction.",
category: "Game",
technologies: ["Unity", "C#"],
image: "assets/armthefarm_pro.png",
link: "https://example.com"
},
{
id: 4,
title: "Deadlock Modding",
description: "I am currenty working on some mods to the game Deadlock. It's one of the reasons i am trying to learn Blender but at the same time I am also learning about the Source 2 engine.",
category: "Modding",
technologies: ["Blender", "Source 2"],
image: "assets/grayertalonmod_pro.jpg",
link: "https://gamebanana.com/mods/629048"
},
{
id: 5,
title: "Portfolio Website",
description: "This very website you are on right now! Built to showcase my projects and skills as a developer and designer.",
category: "Web Development",
technologies: ["HTML", "CSS", "JavaScript"],
image: "assets/portfolio_website_pro.png",
link: "index.html"
},
{
id: 6,
title: "Workout Manager Website",
description: "A simple task management application to help users organize their daily workout activities. Features include task creation, editing, and deletion.",
category: "Web Development",
technologies: ["HTML", "CSS", "JavaScript"],
image: "assets/task_manager_app_pro.png",
link: "http://mossymound.site/johmos-5/uppgift4/html/index.html#main-content"
}
];

// Function to display all projects
function displayProjects(filteredArray = projects) {
    // Clear existing content
    projectList.innerHTML = '';
    
    // Update filter counter
    if (filterCounter) {
        filterCounter.textContent = `Showing ${filteredArray.length} of ${projects.length} projects`;
    }

    // Show only first 2 projects on index page
    if (currentPage === 'index.html') {
        filteredArray = filteredArray.slice(0, 2); 
    }

    // Loop through all projects and create cards
    filteredArray.forEach(project => {
        // Create container div
        const container = document.createElement('div');
        container.className = 'project-card';
        
        // Create image wrapper
        const imageWrapper = document.createElement('div');
        imageWrapper.className = 'image-wrapper';
        
        // Create image
        const img = document.createElement('img');
        img.src = project.image;
        img.alt = `'${project.title}', project banner`;
        
        // Create top tag (title | category)
        const topTag = document.createElement('h3');
        topTag.className = 'pro-tag pro-tag-top';
        topTag.textContent = `${project.title} | ${project.category}`;
        
        // Create bottom tag (technologies)
        const bottomTag = document.createElement('div');
        bottomTag.className = 'pro-tag pro-tag-bottom';
        bottomTag.textContent = project.technologies.join(' & ');
        
        // Create description paragraph
        const description = document.createElement('p');
        description.textContent = project.description;
        
        // Assemble the card
        imageWrapper.appendChild(img);
        imageWrapper.appendChild(topTag);
        imageWrapper.appendChild(bottomTag);
        
        container.appendChild(imageWrapper);
        container.appendChild(description);
        
        // Add link functionality
        container.style.cursor = 'pointer';
        container.addEventListener('click', () => {
            window.open(project.link, '_blank');
        });

        // Card fade-in effect
        container.classList.add('fade-in');
        
        // Remove fade-in class after animation completes to allow hover
        container.addEventListener('animationend', () => {
            container.classList.remove('fade-in');
        }, { once: true });

        // Add to project list
        projectList.appendChild(container);
    });
}

function filterProjects (filteredCategory) {
    console.log("Filtering projects by category:", filteredCategory);
    let filteredArray = projects.filter(function(project) {
        return project.category === filteredCategory;
    });
    if (filteredCategory === 'all') {
        filteredArray = projects;
    }
    displayProjects(filteredArray);
}

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const category = button.getAttribute('data-category');
        filterProjects(category);
        });
});

// Display projects on page load
document.addEventListener('DOMContentLoaded', displayProjects());
