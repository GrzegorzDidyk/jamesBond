
let actorsButton = document.querySelector(".sectionActors__button");
let actorsParagraph = document.querySelector(".sectionActors__paragraphName");
let actorsGallery = document.querySelector(".sectionActors__galery");



actorsButton.addEventListener("click", () => {
    if (actorsButton.innerText === "Pierwszy Aktor") {
        actorsButton.innerText = "Drugi Aktor";
        actorsGallery.innerHTML = '<img class="sectionActors__picture" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Sean_Connery_1964.png">';
        actorsParagraph.classList.add("sectionActors__paragraphName--on");
    }

    else if (actorsButton.innerText === "Drugi Aktor") {
        actorsButton.innerText = "Trzeci Aktor";
        actorsParagraph.innerText = "George Lazenby – 1969 (1 film)";
        actorsGallery.innerHTML = '<img class="sectionActors__picture" src="https://upload.wikimedia.org/wikipedia/commons/2/26/GeorgeLazenby11.14.08ByLuigiNovi2.jpg">';

    }
    else if (actorsButton.innerText === "Trzeci Aktor") {
        actorsButton.innerText = "Czwarty Aktor";
        actorsParagraph.innerText = "Roger Moore – 1973–1985 (7 filmów)";
        actorsGallery.innerHTML = '<img class="sectionActors__picture" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Sir_Roger_Moore_Allan_Warren.jpg/800px-Sir_Roger_Moore_Allan_Warren.jpg">';

    }

    else if (actorsButton.innerText === "Czwarty Aktor") {
        actorsButton.innerText = "Piąty Aktor";
        actorsParagraph.innerText = "Timothy Dalton – 1987–1989 (2 filmy)";
        actorsGallery.innerHTML = '<img class="sectionActors__picture" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Timothy_Dalton_1987.jpg/800px-Timothy_Dalton_1987.jpg">';

    }

    else if (actorsButton.innerText === "Piąty Aktor") {
        actorsButton.innerText = "Szósty Aktor";
        actorsParagraph.innerText = "Pierce Brosnan – 1995–2002 (4 filmy)";
        actorsGallery.innerHTML = '<img class="sectionActors__picture" src="https://upload.wikimedia.org/wikipedia/commons/1/1c/PierceBrosnan%28CannesPhotoCall%29.jpg">';

    }


    else if (actorsButton.innerText === "Szósty Aktor") {
        actorsButton.innerText = "Koniec";
        actorsParagraph.innerText = "Daniel Craig – 2006–2020 (5 filmów)";
        actorsGallery.innerHTML = '<img class="sectionActors__picture" src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Daniel_Craig_-_Film_Premiere_%22Spectre%22_007_-_on_the_Red_Carpet_in_Berlin_%2822387409720%29_%28cropped%29.jpg">';

    }

    else {
        actorsButton.innerText = "Pierwszy Aktor";
        actorsParagraph.innerText = "Sean Connery – 1962–1967, 1971 (6 filmów)";
        actorsGallery.innerHTML = '<img class="sectionActors__picture" src="https://a.allegroimg.com/s512/038695/ac141de940d88b3af2ce5815f99e/James-Bond-Bond-50-Blu-ray-Tytul-James-Bond-Bond-50-Blu-ray">';
        actorsParagraph.classList.remove("sectionActors__paragraphName--on");
    }


})

