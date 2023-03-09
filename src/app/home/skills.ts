export interface iskills {
    name : string;
    picture : string;
}

export const skills: Array<iskills> =[
    {
        name: "Angular",
        picture:"../../assets/angular.png"
    },    
    {
        name: "Java Script",
        picture:"../../assets/js.png"
    },    
    {
        name: "Cloud Practitioner",
        picture: "../../assets/aws.png"
    },
    {
        name: "Type Script",
        picture:"../../assets/ts.png"
    },    
    {
        name: "HTML",
        picture:"../../assets/html5.png"
    },    
    {
        name: "Bootstrap",
        picture:"../../assets/bootstrap.png"
    },
    {
        name: "CSS",
        picture: "../../assets/css.png"
    },
    {
        name: "Git",
        picture:"../../assets/git.png"
    }
]

// Projekts

export interface iprojekts {
    name:string;
    technology:string;
    discription: string;
    picture: string;
    link? : string;
}

export const projekts: Array<iprojekts> = [
    {
        name: "Restourant",
        technology : "Angular, TS, HTML, CSS",
        discription:"A simple homepage with a shopping cart.",
        picture:"../../assets/italian.jpg"
    }
]