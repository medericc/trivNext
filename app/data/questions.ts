interface Question {
    question: string;
    
    answer: string;
  }
  
  interface Questions {
    [category: string]: Question[];
  }
  
  const questions: Questions = {
    Football: [
        {
          question: "Quelle équipe a gagné la Coupe du Monde 2018?",
          answer: "France",
        },
        {
            question: "Quelle équipe a gagné la Coupe du Monde 2022?",
            answer: "Argentine",
          },
          {
            question: "Qui a été élu MVP de la Coupe du Monde 2018?",
            answer: "Luka Modric",
          },
        {
            question: "Qui a été élu MVP de finale de la Coupe du Monde 2018?",
            answer: "Antoine Griezmann",
          },
        {
            question: "Qui a été élu MVP de la Coupe du Monde 2022?",
            answer: "Lionel Messi",
          },
        {
            question: "Qui a été élu MVP de finale de la Coupe du Monde 2022?",
            answer: "Lionel Messi",
          },
        {
            question: "Quelle équipe a gagné la Coupe du Monde 2014?",
            answer: "Allemagne",
          },
          {
            question: "Qui a été élu MVP de la Coupe du Monde 2014?",
            answer: "Lionel Messi",
          },
        {
            question: "Qui a été élu MVP de finale de la Coupe du Monde 2014?",
            answer: "Mario Gotze",
          },
          {
            question: "Quelle équipe a gagné la Coupe du Monde 2010?",
            answer: "Espagne",
          },
          {
            question: "Qui a été élu MVP de la Coupe du Monde 2010?",
            answer: "Diego Forlan",
          },
        {
            question: "Qui a été élu MVP de finale de la Coupe du Monde 2010?",
            answer: "Andres Iniesta",
          },
          {
            question: "Quelle équipe a gagné la Coupe du Monde 2006?",
            answer: "Italie",
          },
          {
            question: "Qui a été élu MVP de la Coupe du Monde 2006?",
            answer: "Zinedine Zidane",
          },
        {
            question: "Qui a été élu MVP de finale de la Coupe du Monde 2006?",
            answer: "Fabio Cannavaro",
          },
          {
            question: "Quelle équipe a gagné la Coupe du Monde 2002?",
            answer: "Brésil",
          },
          {
            question: "Qui a été élu MVP de la Coupe du Monde 2002?",
            answer: "Oliver Kahn",
          },
        {
            question: "Qui a été élu MVP de finale de la Coupe du Monde 2002?",
            answer: "Ronaldo",
          },
          {
            question: "Quelle équipe a gagné la Coupe du Monde 1998?",
            answer: "France",
          },
          {
            question: "Qui a été élu MVP de la Coupe du Monde 1998?",
            answer: "Ronaldo",
          },
        {
            question: "Qui a été élu MVP de finale de la Coupe du Monde 1998?",
            answer: "Zinedine Zidane",
          },
          {
            question: "Quelle équipe a gagné la Coupe du Monde 1994?",
            answer: "Brésil",
          },
    
          {
            question: "Quelle équipe a gagné l'Euro 2020?",
            answer: "Italie",
          },
          {
            question: "Quelle équipe a gagné l'Euro 2016?",
            answer: "Portugal",
          },
          {
            question: "Qui a été MVP de l'Euro 2016?",
            answer: "Antoine Griezmann",
          },
          {
            question: "Qui a été MVP de la finale de l'Euro 2016?",
            answer: "Pepe",
          },
          {
            question: "Quelle équipe a gagné l'Euro 2012?",
            answer: "Espagne",
          },
          {
            question: "Quelle équipe a gagné l'Euro 2008?",
            answer: "Espagne",
          },
          {
            question: "Quelle équipe a gagné la Copa América 2024?",
            answer: "Argentine",
          },
          {
            question: "Quelle équipe a gagné la Copa América 2021?",
            answer: "Argentine",
          },
          {
            question: "Qui a été MVP de la Copa América 2021?",
            answer: "Lionel Messi",
          },
          {
            question: "Quelle équipe a gagné la Copa América 2019?",
            answer: "Brésil",
          },
          {
            question: "Qui a été MVP de la Copa América 2019?",
            answer: "Dani Alves",
          },
          {
            question: "Quelle équipe a gagné la Copa América 2016?",
            answer: "Chili",
          },
          {
            question: "Qui a été MVP de la Copa América 2016?",
            answer: "Lionel Messi",
          },
          {
            question: "Quelle équipe a gagné la Copa América 2015?",
            answer: "Chili",
          },
          {
            question: "Qui a été MVP de la Copa América 2015?",
            answer: "Lionel Messi",
          },
          {
            question: "Quelle équipe a gagné la Copa América 2011?",
            answer: "Uruguay",
          },
          {
            question: "Qui a été MVP de la Copa América 2011?",
            answer: "Luis Suarez",
          },
        {
          question: "Meilleur buteur de l'histoire en compétitions internationales?",
          answer: "Lionel Messi (27)",
        },
        {
          question: "Joueur le plus décisif de l'histoire de la Coupe du Monde?",
          answer: "Lionel Messi (21)",
        },
        {
          question: "Joueur le plus décisif en phase finale de Coupe du Monde?",
          answer: "Lionel Messi (11)",
        },
        {
          question: "Joueur avec le plus de titres de MOTM en Coupe du Monde?",
          answer: "Lionel Messi (12)",
        },
        {
            question: "Joueur avec le plus de titres de MOTM en phase finale du mondial?",
            answer: "Lionel Messi (12)",
          },
        {
          question: "Joueur avec le plus de titres de MVP en Coupe du Monde?",
          answer: "Lionel Messi (2)",
        },
        {
          question: "Joueur avec le plus de Soulier d'Or?",
          answer: "Lionel Messi (6)",
        },
        {
          question: "Joueur avec le plus de buts en Europe?",
          answer: "Lionel Messi (704)",
        },
        {
          question: "Joueur avec le plus de titres de Playmaker d'élite?",
          answer: "Lionel Messi (5)",
        },
        {
          question: "Joueur le plus souvent désigné meilleur dribbleur de la saison?",
          answer: "lionel Messi (11)",
        },
        {
          question: "Joueur avec le plus de titres de POTY?",
          answer: "Lionel Messi (17)",
        },
        {
          question: "Meilleur dribbleur de l'histoire de la Coupe du Monde?",
          answer: "Lionel Messi (125)",
        },
        {
          question: "Joueur avec le plus de titres de MVP en sélections nationales?",
          answer: "Lionel Messi (8)",
        },
        {
          question: "Meilleur rating de l'histoire de la Ligue des Champions?",
          answer: "Lionel Messi (8.1)",
        },
       
        {
          question: "Joueur qui a créé le plus d'occasions en Ligue des Champions?",
          answer: "Lionel Messi (82)",
        },
        {
          question: "Joueur qui a le plus de titres The Best?",
          answer: "Lionel Messi (8)",
        },
        {
          question: "Joueur qui a le plus de Ballons d'Or?",
          answer: "Lionel Messi (8)",
        },
        {
          question: "Joueur avec le plus de buts en finales?",
          answer: "Lionel Messi (34)",
        },
        {
          question: "Joueur le plus décisif en finale?",
          answer: "Lionel Messi (50)",
        },
        {
          question: "Joueur avec le plus de titres MOTM dans l'histoire du football?",
          answer: "Lionel Messi (580)",
        },
        {
          question: "Joueur le plus titré de l'histoire collectivement?",
          answer: "Lionel Messi (46)",
        },
        {
          question: "Le ballon d'or le plus unanime de l'histoire?",
          answer: "Messi (2009)",
        },
        {
            question: "Meilleur buteur de l'histoire du classico?",
            answer: "Lionel Messi (26)",
          },
          {
            question: "Meilleur buteur de l'histoire en dehors de la surface?",
            answer: "Lionel Messi (97)",
          },
          {
            question: "Meilleur buteur de l'histoire sur coup-franc?",
            answer: "Marcelinho (77)",
          },
          {
            question: "Seul footballeur à avoir gagné le Laureus?",
            answer: "Lionel Messi (2)",
          },
          {
            question: "Joueur avec le plus de nominations dans la FIFPRO?",
            answer: "Lionel Messi (17)",
          },
          {
            question: "Joueur avec le plus de MOTM en finale du mondial?",
            answer: "Pelé (2)",
          },
          {
            question: "Meilleurs buteurs de l'histoire sur une saison?",
            answer: "Lionel Messi (73)",
          },
          {
            question: "Meilleurs buteurs de l'histoire sur une annee?",
            answer: "Lionel Messi (91)",
          },
          {
            question: "Meilleure note en finale de ligue des champions?",
            answer: "Lionel Messi (2011)",
          },
          {
            question: "Joueur qui a le plus de MVP en ligue des champions?",
            answer: "Lionel Messi (6)",
          },
          {
            question: "Joueur qui a le réussi le plus de dribbles en ligue des champions?",
            answer: "Lionel Messi (687)",
          },
          {
            question: "Joueur qui a le réussi le plus de passes clés en ligue des champions?",
            answer: "Lionel Messi (350)",
          },
          {
            question: "Joueur qui a eu le plus de 10/10 en ligue des champions?",
            answer: "Lionel Messi (10)",
          },
          {
            question: "Joueur qui a eu obtenus le plus de pénaltys en ligue des champions?",
            answer: "Lionel Messi (13)",
          },
          {
            question: "Joueur qui a tiré le plus de pénaltys en ligue des champions?",
            answer: "Cristiano Ronaldo (19)",
          },
          {
            question: "Joueur qui a mis le plus de pénaltys en ligue des champions?",
            answer: "Cristiano Ronaldo (19)",
          },
          {
            question: "Joueur qui a eu le plus de pénaltys?",
            answer: "Cristiano Ronaldo (200)",
          },
          {
            question: "Joueur qui a mis le plus de pénaltys?",
            answer: "Cristiano Ronaldo (169)",
          },
          {
            question: "Joueur qui a loupé le plus de pénaltys?",
            answer: "Cristiano Ronaldo (13)",
          },
      ],
    Sport: [
        {
            question: "Combien de joueurs composent une équipe de basket sur le terrain?",
            answer: "5",
          },
          {
            question: "Quel sport est surnommé le 'sport roi' aux États-Unis?",
            answer: "Baseball",
          },
          {
            question: "Combien de sets faut-il gagner pour remporter un match de tennis en Grand Chelem (chez les hommes)?",
            answer: "3",
          },
          {
            question: "Quel est le sport national du Japon?",
            answer: "Sumo",
          },
          {
            question: "Quelle est la distance d’un marathon?",
            answer: "42,195 km",
          },
          {
            question: "En quelle année le rugby à XV a-t-il été ajouté aux Jeux Olympiques?",
            answer: "1900",
          },
          {
            question: "Combien de médailles d'or a remporté Michael Phelps aux Jeux Olympiques de 2008?",
            answer: "8",
          },
          {
            question: "Quel pays a remporté le plus de médailles aux Jeux Olympiques d'hiver?",
            answer: "Norvège",
          },
          {
            question: "Combien de joueurs composent une équipe de volley-ball sur le terrain?",
            answer: "6",
          },
          {
            question: "Quel pays a organisé les premiers Jeux Olympiques modernes?",
            answer: "Grèce",
          },
          {
            question: "Quel est le sport pratiqué avec une crosse et une balle sur la glace?",
            answer: "Hockey sur glace",
          },
          {
            question: "Quel est le sport de Serena Williams?",
            answer: "Tennis",
          },
          {
            question: "Combien de trous comporte un parcours de golf standard?",
            answer: "18",
          },
          {
            question: "Quelle est la course de cyclisme la plus célèbre au monde?",
            answer: "Tour de France",
          },
          {
            question: "Quelle ceinture est attribuée au plus haut niveau de judo?",
            answer: "Noire",
          },
          {
            question: "Dans quel sport utilise-t-on une planche et des roulettes?",
            answer: "Skateboard",
          },
          {
            question: "Quel sport consiste à frapper une balle au-dessus d'un filet à l'aide d'une raquette?",
            answer: "Tennis",
          },
          {
            question: "Quel sport est aussi appelé ping-pong?",
            answer: "Tennis de table",
          },
          {
            question: "Quel est le sport de Usain Bolt?",
            answer: "Athlétisme",
          },
          {
            question: "Dans quel sport utilise-t-on des pierres et une cible circulaire sur la glace?",
            answer: "Curling",
          },
          {
            question: "Combien de joueurs composent une équipe de baseball sur le terrain?",
            answer: "9",
          },
          {
            question: "Quel sport se pratique avec un volant et une raquette?",
            answer: "Badminton",
          },
          {
            question: "Combien de points vaut un panier à trois points en basket?",
            answer: "3",
          },
          {
            question: "Quel sport utilise un anneau et des cordes?",
            answer: "Boxe",
          },
          {
            question: "Quelle est la distance d'une course de 100 mètres?",
            answer: "100 mètres",
          },
          {
            question: "Quel sport est appelé 'le sport des rois'?",
            answer: "Polo",
          },
          {
            question: "Quel est le sport de Tiger Woods?",
            answer: "Golf",
          },
          {
            question: "Quel sport se pratique sur un ring?",
            answer: "Boxe",
          },
          {
            question: "Quel est le sport de Tony Parker?",
            answer: "Basketball",
          },
          {
            question: "Dans quel sport utilise-t-on des sabres ou des épées?",
            answer: "Escrime",
          },
          {
            question: "Quel sport se pratique avec une barre et des poids?",
            answer: "Haltérophilie",
          },
          {
            question: "Quel sport se joue avec un ballon ovale?",
            answer: "Rugby",
          },
          {
            question: "Quel est le sport de Rafael Nadal?",
            answer: "Tennis",
          },
          {
            question: "Quel sport se pratique avec un arc et des flèches?",
            answer: "Tir à l'arc",
          },
          {
            question: "Quel sport se joue avec des quilles et une boule lourde?",
            answer: "Bowling",
          },
          {
            question: "Quel sport utilise des skis et des bâtons?",
            answer: "Ski alpin",
          },
          {
            question: "Quel sport se joue avec des raquettes et une petite balle jaune?",
            answer: "Tennis",
          },
          {
            question: "Dans quel sport utilise-t-on une pagaie et une embarcation?",
            answer: "Aviron",
          },
          {
            question: "Quel sport se joue avec une balle et un panier suspendu?",
            answer: "Basketball",
          },
          {
            question: "Quel est le sport de Novak Djokovic?",
            answer: "Tennis",
          },
          {
            question: "Quel sport utilise des pédales, un guidon et deux roues?",
            answer: "Cyclisme",
          },
          {
            question: "Quel sport est aussi appelé le 'roi des sports d'hiver'?",
            answer: "Ski alpin",
          },
          {
            question: "Dans quel sport le vainqueur reçoit un maillot jaune?",
            answer: "Cyclisme",
          },
          {
            question: "Quel est le sport de Simone Biles?",
            answer: "Gymnastique artistique",
          },
          {
            question: "Dans quel sport peut-on obtenir un strike?",
            answer: "Bowling",
          },
          {
            question: "Combien de points vaut un essai au rugby?",
            answer: "5",
          },
          {
            question: "Quel sport se pratique avec une balle et une raquette sur une table?",
            answer: "Tennis de table",
          },
          {
            question: "Quel sport utilise une planche et une voile?",
            answer: "Planche à voile",
          },
          {
            question: "Quel est le sport de Roger Federer?",
            answer: "Tennis",
          },
          {
            question: "Quel sport consiste à nager dans une piscine sur une distance définie?",
            answer: "Natation",
          },
    ],
    Bible: [
      {
        question: "Qui a écrit les Psaumes?",
        answer: "David",
      },
    ],
    France: [
      {
        question: "En quelle année a eu lieu la Révolution française?",
        answer: "1789",
      },
    ],
    Géographie: [
      {
        question: "Quel est le plus grand désert du monde?",
        answer: "Antarctique",
      },
    ],
    Général: [
      {
        question: "Quelle est la planète la plus proche du Soleil?",
        answer: "Mercure",
      },
    ],
  };
  
  export default questions;
  