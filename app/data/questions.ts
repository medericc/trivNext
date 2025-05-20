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
          }, {
    question: "Quel club a remporté le plus de Ligues des Champions?",
    answer: "Real Madrid (15)",
  },
  {
    question: "Quel joueur a remporté le plus de Ligues des Champions?",
    answer: "Paco Gento (6)",
  },
  {
    question: "Quel est le club le plus titré de l'histoire?",
    answer: "Al Ahly SC (121)",
  },
  {
    question: "Quel joueur a marqué le plus de buts en Coupe du Monde?",
    answer: "Miroslav Klose (16)",
  },
  {
    question: "Quel joueur a marqué le plus de buts en une Coupe du Monde?",
    answer: "Just Fontaine (13)",
  },
  {
    question: "Quel joueur a disputé le plus de matchs en Coupe du Monde?",
    answer: "Lionel Messi (26)",
  },
  {
    question: "Quelle nation a remporté le plus de Coupes du Monde?",
    answer: "Brésil (5)",
  },
  {
    question: "Quel pays a organisé la première Coupe du Monde?",
    answer: "Uruguay",
  },

  {
    question: "Quel pays a gagné la Coupe du Monde 1990?",
    answer: "Allemagne",
  },
  {
    question: "Qui a marqué le but en finale de la Coupe du Monde 2014?",
    answer: "Mario Götze",
  },
  {
    question: "Combien de fois la France a-t-elle gagné la Coupe du Monde?",
    answer: "2",
  },
  {
    question: "Quel club a gagné la Premier League en 2022?",
    answer: "Manchester City",
  },
  {
    question: "Quel joueur détient le record de buts en Premier League?",
    answer: "Alan Shearer (260)",
  },
  {
    question: "Quel joueur a remporté le plus de Ballons d'Or avant Messi?",
    answer: "Pelé (7)",
  },
  {
    question: "Quel pays a remporté l'Euro 2004?",
    answer: "Grèce",
  },
  {
    question: "Quel joueur a été surnommé 'Il Fenomeno'?",
    answer: "Ronaldo",
  },
 
  {
    question: "Quel club a remporté la Ligue des Champions 2012?",
    answer: "Chelsea",
  },
  {
    question: "Quel club a remporté la Ligue des Champions 2013?",
    answer: "Bayern Munich",
  },
  {
    question: "Qui a marqué un triplé en finale de la Ligue des Champions 2022?",
    answer: "Aucun, victoire 1-0 du Real",
  },


  {
    question: "Quel est le plus grand stade d'Europe en capacité?",
    answer: "Camp Nou (99 354)",
  },
  {
    question: "Quel club possède le plus de titres de champion d'Angleterre?",
    answer: "Manchester United",
  },
  {
    question: "Qui a remporté la Copa América 2007?",
    answer: "Brésil",
  },
  {
    question: "Qui a remporté la Copa América 2004?",
    answer: "Brésil",
  },
  {
    question: "Quel club a remporté la Ligue des Champions 2005?",
    answer: "Liverpool",
  },
  {
    question: "Quel joueur a raté un penalty en finale de la Coupe du Monde 1994?",
    answer: "Roberto Baggio",
  },
  {
    question: "Quel joueur a été exclu en finale de Coupe du Monde 2006?",
    answer: "Zinedine Zidane",
  },

 
  {
    question: "Quel joueur a marqué le but décisif en finale de la Coupe du Monde 2010?",
    answer: "Andres Iniesta",
  },
 
  {
    question: "Quel joueur a marqué le but décisif en finale de l'Euro 2000?",
    answer: "David Trezeguet",
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
          },{
    "question": "Quel est le sport de Léna Monasse?",
    "answer": "Basketball"
  },
  {
    "question": "Dans quel sport utilise-t-on un kimono blanc et une ceinture de couleur?",
    "answer": "Judo"
  },

  {
    "question": "Quel est le sport le plus vieux?",
    "answer": "Lutte"
  },
  {
    "question": "Dans quel sport pratique-t-on des katas?",
    "answer": "Karaté"
  },
  {
    "question": "Quel sport se joue avec un palet et des crosses sur la glace?",
    "answer": "Hockey sur glace"
  },
  {
    "question": "Quel sport est pratiqué lors du Tour d’Italie?",
    "answer": "Cyclisme"
  },
  {
    "question": "De quel nationalité est Jade Célérier?",
    "answer": "Française (Béarn)"
  },
  {
    "question": "Dans quel sport peut-on faire un ace?",
    "answer": "Tennis"
  },
  {
    "question": "Quel sport se pratique en salle avec une balle collante et des buts?",
    "answer": "Handball"
  },
  {
    "question": "Quel sport est associé à Tony Yoka?",
    "answer": "Boxe"
  },
  {
    "question": "Critiano Ronaldo est un?",
    "answer": "Instagrameur"
  },
  {
    "question": "Quel sport est pratiqué avec un cheval et des obstacles?",
    "answer": "Équitation"
  },
  {
    "question": "Quel sport utilise une cible colorée et des fléchettes?",
    "answer": "Fléchettes"
  },
  {
    "question": "Dans quel sport trouve-t-on le lancer de javelot?",
    "answer": "Athlétisme"
  },
  {
    "question": "Quel est le sport de Max Verstappen?",
    "answer": "Formule 1"
  },
  {
    "question": "Quel sport combine ski de fond et tir à la carabine?",
    "answer": "Biathlon"
  },
  {
    "question": "Quel sport se pratique sur une planche dans les vagues?",
    "answer": "Surf"
  },
  {
    "question": "Quel est le poste de Lionel Messi?",
    "answer": "Meneur de Jeu"
  },
  {
    "question": "Quel sport utilise des engins comme le ruban et le cerceau?",
    "answer": "Gymnastique rythmique"
  },
  {
    "question": "Quel sport est pratiqué sur des pistes glacées avec une luge?",
    "answer": "Luge"
  },
  {
    "question": "Quel sport se pratique en frappant une balle sur un mur?",
    "answer": "Squash"
  },
  {
    "question": "Quel sport est associé à Conor McGregor?",
    "answer": "MMA"
  },
  {
    "question": "Quel sport se pratique avec deux bateaux tirés par des rameurs?",
    "answer": "Aviron"
  },
  {
    "question": "Quel est le sport de Biles Simone?",
    "answer": "Gymnastique artistique"
  },
  {
    "question": "Quel sport se pratique avec un disque lancé à distance?",
    "answer": "Lancer du disque"
  },
  {
    "question": "Quel sport se déroule dans un octogone?",
    "answer": "MMA"
  },
  {
    "question": "Quel sport utilise des lames sur les chaussures?",
    "answer": "Patinage artistique"
  },
  {
    "question": "Quel sport consiste à faire des figures dans les airs à vélo?",
    "answer": "BMX freestyle"
  },
  {
    "question": "Quel sport se joue en double ou en simple avec un volant?",
    "answer": "Badminton"
  },
  {
    "question": "Quel est le sport de Teddy Riner?",
    "answer": "Judo"
  },
  {
    "question": "Quel sport demande de tirer avec précision sur une cible en papier?",
    "answer": "Tir sportif"
  },
  {
    "question": "Quel sport est pratiqué sur une piste ovale en patinant?",
    "answer": "Short track"
  },
  {
    "question": "Quel sport consiste à gravir des parois rocheuses?",
    "answer": "Escalade"
  },
  {
    "question": "Quel sport se pratique avec des sauts à ski?",
    "answer": "Saut à ski"
  },
  {
    "question": "Quel sport consiste à effectuer des pirouettes sur la glace?",
    "answer": "Patinage artistique"
  },
  {
    "question": "Quel sport est jugé sur la technique et la grâce au sol ou sur agrès?",
    "answer": "Gymnastique artistique"
  },
  {
    "question": "Quel est le sport de Alain Bernard?",
    "answer": "Natation"
  },
  {
    "question": "Quel sport se joue avec deux équipes et un ballon en salle sans dribble?",
    "answer": "Volley-ball"
  },
  {
    "question": "Quel sport consiste à courir, sauter et lancer?",
    "answer": "Athlétisme"
  },
  {
    "question": "Quel sport se pratique avec des skis sur des bosses et sauts acrobatiques?",
    "answer": "Ski de bosses"
  },
  {
    "question": "Quel sport se pratique avec un cerf-volant de traction sur l’eau?",
    "answer": "Kitesurf"
  },
  {
    "question": "Quel sport utilise un pistolet laser et la course à pied?",
    "answer": "Pentathlon moderne"
  },
  {
    "question": "Quel sport mélange course, vélo et natation?",
    "answer": "Triathlon"
  },
  {
    "question": "Quel sport se joue avec une raquette plus courte et une balle creuse?",
    "answer": "Squash"
  },
  {
    "question": "Quel métier est associé à Cristiano Ronaldo?",
    "answer": "Youtubeur"
  },
  {
    "question": "Quel sport consiste à glisser sur une rampe en demi-lune?",
    "answer": "Skateboard"
  },
  {
    "question": "Quel sport se pratique avec une voile tirée par le vent sur la mer?",
    "answer": "Planche à voile"
  },
  {
    "question": "Quel sport utilise un ballon et des lancers en panier suspendu?",
    "answer": "Basketball"
  },
  {
    "question": "Quel sport se joue sur terre battue ou gazon avec une balle jaune?",
    "answer": "Tennis"
  },
  {
    "question": "Quel sport consiste à maintenir son équilibre sur un fil tendu?",
    "answer": "Slackline"
  },
  {
    "question": "Quel sport utilise des piolets et des crampons pour grimper la glace?",
    "answer": "Alpinisme"
  },
  {
    "question": "Quel sport se pratique en combinant ski et parapente?",
    "answer": "Speed riding"
  },
  {
    "question": "Quel sport de glisse se pratique dans un halfpipe enneigé?",
    "answer": "Snowboard"
  },
  {
    "question": "Quel sport se pratique en équipe avec des balles et des balais sur la glace?",
    "answer": "Curling"
  },
  {
    "question": "Quel sport olympique implique de courir en franchissant des haies?",
    "answer": "110 mètres haies"
  },
  {
    "question": "Quel sport consiste à faire des pompes et des tractions en compétition?",
    "answer": "Street workout"
  },
  {
    "question": "Quel sport est jugé sur la forme et la masse musculaire?",
    "answer": "Bodybuilding"
  },
  {
    "question": "Quel sport utilise une corde pour effectuer des sauts acrobatiques?",
    "answer": "Double dutch"
  },
  {
    "question": "Quel sport se pratique en descendant une rivière avec un kayak?",
    "answer": "Canoë-kayak"
  },
  {
    "question": "Quel sport est connu pour ses compétitions de sumos géants?",
    "answer": "Sumo"
  },
  {
    "question": "Quel sport d’hiver consiste à descendre une piste glacée sur un petit traîneau?",
    "answer": "Skeleton"
  },
  {
    "question": "Quel sport implique un lancer de marteau au bout d’une chaîne?",
    "answer": "Lancer du marteau"
  },
  {
    "question": "Quel sport se pratique sur une poutre étroite avec des figures artistiques?",
    "answer": "Gymnastique artistique"
  },
  {
    "question": "Quel sport se pratique à cheval avec une balle et un maillet?",
    "answer": "Polo"
  },
  {
    "question": "Quel sport se pratique sur un mur d'escalade artificiel en vitesse?",
    "answer": "Escalade de vitesse"
  },
  {
    "question": "Quel sport se déroule dans une piscine avec musique et chorégraphie?",
    "answer": "Natation artistique"
  },
  {
    "question": "Quel sport se pratique en montagne avec un piolet et des crampons?",
    "answer": "Alpinisme"
  },
  {
    "question": "Quel sport demande de l’endurance à vélo sur route pendant des heures?",
    "answer": "Cyclisme sur route"
  },
  {
    "question": "Quel sport de combat autorise les coups de pied, poing, genou et coude?",
    "answer": "Muay Thaï"
  },
  {
    "question": "Quel sport est jugé en plongeant depuis une grande hauteur?",
    "answer": "Plongeon"
  },
  {
    "question": "Quel sport est appelé le 'noble art'?",
    "answer": "Boxe"
  },
  {
    "question": "Quel sport consiste à faire le tour d’une piste ovale à vélo?",
    "answer": "Cyclisme sur piste"
  },
  {
    "question": "Quel sport utilise des haubans, une coque et une voile?",
    "answer": "Voile"
  },
  {
    "question": "Quel sport est pratiqué avec un long couloir, des starting-blocks et un sprint?",
    "answer": "Course de 100 mètres"
  },
  {
    "question": "Quel sport est pratiqué avec des haltères en compétition?",
    "answer": "Haltérophilie"
  },
  {
    "question": "Quel sport se pratique sur glace avec des figures et de la musique?",
    "answer": "Patinage artistique"
  },
  {
    "question": "Quel sport d’équipe oppose six joueurs par camp sur un terrain en salle?",
    "answer": "Volley-ball"
  }
    ],
    Bible: [
      {
        "question": "Qui a construit l'arche pour échapper au déluge?",
        "answer": "Noé"
      },
      {
        "question": "Quel est le premier livre de la Bible?",
        "answer": "Genèse"
      },
      {
        "question": "Qui a conduit les Israélites hors d'Égypte?",
        "answer": "Moïse"
      },
      {
        "question": "Quelle mer Moïse a-t-il traversée avec les Israélites?",
        "answer": "La mer Rouge"
      },
      {
        "question": "Qui est considéré comme le père des croyants?",
        "answer": "Abraham"
      },
      {
        "question": "Quel signe Dieu a-t-il donné à Noé pour promettre qu'il n'y aurait plus de déluge?",
        "answer": "Un arc-en-ciel"
      },
      {
        "question": "Quel fruit Ève a-t-elle mangé dans le jardin d'Éden?",
        "answer": "Le fruit de l'arbre de la connaissance du bien et du mal"
      },
      {
        "question": "Combien de plaies Dieu a-t-il infligées à l'Égypte?",
        "answer": "Dix"
      },
      {
        "question": "Quel est le nom du frère d'Abel?",
        "answer": "Caïn"
      },
      {
        "question": "Qui a passé une nuit dans la fosse aux lions?",
        "answer": "Daniel"
      },
      {
        "question": "Quel est le premier commandement donné par Dieu à Moïse?",
        "answer": "Tu n'auras pas d'autres dieux devant moi"
      },
      {
        "question": "Qui a été vendu comme esclave par ses frères?",
        "answer": "Joseph"
      },
      {
        "question": "Combien de jours la création du monde a-t-elle pris?",
        "answer": "Six jours, plus un jour de repos"
      },
      {
        "question": "Qui a été transformée en statue de sel?",
        "answer": "La femme de Lot"
      },
      {
        "question": "Quel prophète a été avalé par un grand poisson?",
        "answer": "Jonas"
      },
      {
        "question": "Quel roi a demandé la construction du Temple à Jérusalem?",
        "answer": "Salomon"
      },
      {
        "question": "Quelle est la ville détruite par Dieu pour ses péchés, avec Gomorrhe?",
        "answer": "Sodome"
      },
      {
        "question": "Comment s'appelle le frère aîné de Moïse?",
        "answer": "Aaron"
      },
      {
        "question": "Qui a reçu les Dix Commandements sur le mont Sinaï?",
        "answer": "Moïse"
      },
      {
        "question": "Combien d'animaux de chaque espèce Noé a-t-il pris dans l'arche?",
        "answer": "Deux, un mâle et une femelle"
      },
      {
        "question": "Qui a tué Goliath?",
        "answer": "David"
      },
      {
        "question": "Quel livre de la Bible raconte la sortie d'Égypte?",
        "answer": "Exode"
      },
      {
        "question": "Qui a été le premier roi d'Israël?",
        "answer": "Saül"
      },
      {
        "question": "Quel prophète a vu des ossements reprendre vie dans une vision?",
        "answer": "Ézéchiel"
      },
      {
        "question": "Quelle femme a sauvé son peuple en devenant reine de Perse?",
        "answer": "Esther"
      },
      {
        "question": "Qui est la mère de Samuel?",
        "answer": "Anne"
      },
      {
        "question": "Quel patriarche a vu une échelle reliant la terre et le ciel?",
        "answer": "Jacob"
      },
      {
        "question": "Quel prophète a confronté les prophètes de Baal sur le mont Carmel?",
        "answer": "Élie"
      },
      {
        "question": "Quel roi est connu pour sa grande sagesse?",
        "answer": "Salomon"
      },
      {
        "question": "Dans quel livre trouve-t-on le récit de la création du monde?",
        "answer": "Genèse"
      },
      {
        "question": "Quelle femme a trahi Samson?",
        "answer": "Dalila"
      },
      {
        "question": "Quel est le nom du fleuve où Moïse a été caché bébé?",
        "answer": "Le Nil"
      },
      {
        "question": "Qui a remplacé Moïse pour conduire les Israélites en Terre promise?",
        "answer": "Josué"
      },
      {
        "question": "Quel fils d'Abraham est né de Sara?",
        "answer": "Isaac"
      },
      {
        "question": "Quel fils d'Isaac a reçu la bénédiction de son père en se déguisant?",
        "answer": "Jacob"
      },
      {
        "question": "Quel est le nom du géant vaincu par David?",
        "answer": "Goliath"
      },
      {
        "question": "Combien de jours Jonas a-t-il passé dans le ventre du poisson?",
        "answer": "Trois jours et trois nuits"
      },
      {
        "question": "Quel est le nom du jardin où Adam et Ève vivaient?",
        "answer": "Éden"
      },
      {
        "question": "Qui a écrit les Proverbes?",
        "answer": "Salomon"
      },
      {
        "question": "Qui a été enlevé au ciel sans mourir?",
        "answer": "Énoch"
      },
      {
        "question": "Quel homme est resté fidèle à Dieu malgré de grandes épreuves?",
        "answer": "Job"
      },
      {
        "question": "Combien de jours a duré le déluge?",
        "answer": "40 jours et 40 nuits"
      },
      {
        "question": "Quel est le nom de la femme d'Abraham?",
        "answer": "Sara"
      },
      {
        "question": "Quel est le dernier livre de l'Ancien Testament?",
        "answer": "Malachie"
      },
      {
        "question": "Quel est le nom des premiers enfants nés d'Adam et Ève?",
        "answer": "Caïn et Abel"
      },
      {
        "question": "Qui a vu le buisson ardent?",
        "answer": "Moïse"
      },
      {
        "question": "Quelle est la langue originale de l'Ancien Testament?",
        "answer": "Hébreu"
      },
      {
        "question": "Quel prophète a interprété les rêves du pharaon?",
        "answer": "Joseph"
      },
      {
        "question": "Quel livre de la Bible est un recueil de chants et de prières?",
        "answer": "Psaumes"
      },
      {
        "question": "Quel est le premier miracle de Moïse en Égypte?",
        "answer": "Changer l'eau du Nil en sang"
      },
      {
        "question": "Qui a été englouti par la terre après avoir défié Moïse et Aaron?",
        "answer": "Korah et ses partisans"
      },
      {
        "question": "Combien de tribus composent Israël?",
        "answer": "Douze"
      },
      {
        "question": "Qui était la femme de Jacob qui lui a donné Joseph?",
        "answer": "Rachel"
      },
      {
        "question": "Quel est le nom du premier meurtrier dans la Bible?",
        "answer": "Caïn"
      },
      {
        "question": "Quel prophète a prédit la naissance de Jésus?",
        "answer": "Ésaïe"
      },
      {
        "question": "Quel animal a parlé à Balaam?",
        "answer": "Une ânesse"
      },
      {
        "question": "Quel est le nom du fils d'Abraham et de Hagar?",
        "answer": "Ismaël"
      },
      {
        "question": "Quel roi a été frappé de lèpre pour son orgueil?",
        "answer": "Ozias"
      },
      {
        "question": "Quel homme a été connu pour avoir construit un mur autour de Jérusalem?",
        "answer": "Néhémie"
      },
      {
        "question": "Quel prophète a épousé une femme infidèle pour symboliser l'infidélité d'Israël?",
        "answer": "Osée"
      },
      {
        "question": "Quelle fête célèbre la sortie d'Égypte?",
        "answer": "La Pâque"
      },
      {
        "question": "Quel prophète a monté au ciel dans un char de feu?",
        "answer": "Élie"
      },
      {
        "question": "Quel livre contient les lois données aux Israélites dans le désert?",
        "answer": "Lévitique"
      },
      {
        "question": "Qui a été nourri par des corbeaux au bord du torrent de Kerith?",
        "answer": "Élie"
      },
      {
        "question": "Quelle reine a rendu visite à Salomon pour tester sa sagesse?",
        "answer": "La reine de Saba"
      },
      {
        "question": "Quel prophète a dit : 'Voici l'Agneau de Dieu qui ôte le péché du monde'?",
        "answer": "Jean-Baptiste"
      },
      {
        "question": "Quel est le livre poétique qui parle de l'amour entre un homme et une femme?",
        "answer": "Cantique des Cantiques"
      },
      {
        "question": "Quel roi a ordonné le recensement qui a causé la colère de Dieu?",
        "answer": "David"
      },
      {
        "question": "Quel prophète a survécu dans une fournaise ardente avec trois autres hommes?",
        "answer": "Daniel (avec Shadrak, Méshak et Abed-Nego)"
      },
      {
        "question": "Quelle femme a sauvé Moïse en le plaçant dans un panier?",
        "answer": "Sa mère (Yokébed)"
      },
      {
        "question": "Quel juge a été connu pour sa grande force?",
        "answer": "Samson"
      },
      {
        "question": "Quel livre raconte les exploits des juges d'Israël?",
        "answer": "Juges"
      },
      {
        "question": "Qui a été choisi par Dieu pour être le dernier juge et premier prophète d'Israël?",
        "answer": "Samuel"
      },
      {
        "question": "Quel prophète a reconstruit l'autel de Dieu sur le mont Carmel?",
        "answer": "Élie"
      },
      {
        "question": "Quel roi a écrit la majorité des Psaumes?",
        "answer": "David"
      },
      {
        "question": "Quel est le nom du fleuve dans lequel Naamân a été guéri de la lèpre?",
        "answer": "Le Jourdain"
      },
      {
        "question": "Quelle était la profession d'Amos avant de devenir prophète?",
        "answer": "Berger"
      },
      {
        "question": "Combien de jours les Israélites ont-ils tourné autour de Jéricho avant que les murs ne tombent?",
        "answer": "Sept jours"
      },
      {
        "question": "Quel prophète a vécu durant la captivité babylonienne et a interprété les rêves du roi Nebucadnetsar?",
        "answer": "Daniel"
      },
      {
        "question": "Qui était le roi de Babylone quand les trois hommes ont été jetés dans la fournaise?",
        "answer": "Nebucadnetsar"
      },
      {
        "question": "Quel prophète a vu une roue dans une vision?",
        "answer": "Ézéchiel"
      },
      {
        "question": "Quelle reine méchante a menacé de tuer Élie?",
        "answer": "Jézabel"
      },
      {
        "question": "Quel est le livre biblique où figure le récit de la tour de Babel?",
        "answer": "Genèse"
      },
      {
        "question": "Qui a écrit le livre des Lamentations?",
        "answer": "Jérémie"
      },
      {
        "question": "Combien de livres composent l'Ancien Testament?",
        "answer": "39 (selon le canon protestant)"
      },
      {
        "question": "Quel livre raconte l'histoire de Ruth?",
        "answer": "Ruth"
      },
      {
        "question": "Quel est le nom de l'ange qui a combattu avec Jacob?",
        "answer": "On ne sait pas; il est identifié comme 'un homme' ou 'Dieu'."
      },
      {
        "question": "Quel est le nom de la montagne où Moïse a vu le buisson ardent?",
        "answer": "Mont Horeb"
      },
      {
        "question": "Quel livre raconte la destruction de Ninive?",
        "answer": "Nahum"
      },
      {
        "question": "Qui est la mère de tous les vivants selon la Genèse?",
        "answer": "Ève"
      },
      {
        "question": "Quel roi a perdu son royaume pour avoir adoré d'autres dieux?",
        "answer": "Saül"
      },
      {
        "question": "Quel est le nom du père de David?",
        "answer": "Jessé"
      },
      {
        "question": "Quelle est la durée de la captivité babylonienne d'Israël?",
        "answer": "70 ans"
      },
      {
        "question": "Quel prophète a prophétisé la venue d'un Messie né à Bethléhem?",
        "answer": "Michée"
      },
      {
        "question": "Quel est le nom du souverain sacrificateur qui a béni Abraham?",
        "answer": "Melchisédek"
      },
       {
        "question": "Lors de l'annonciation, quel ange parle à Marie?",
        "answer": "Gabriel"
      },
       {
        "question": "Lors de la visitation, qui Marie va-t-elle voir?",
        "answer": "Elisabeth"
      },
       {
        "question": "Qui est le père de Jean le Baptiste?",
        "answer": "Zacharie"
      },
      {
        "question": "Quel livre commence par 'Au commencement,'?",
        "answer": "Genèse"
      },
      {
        "question": "Quel prophète a écrit : 'Les cieux racontent la gloire de Dieu'?",
        "answer": "David (dans les Psaumes)"
      }
    ],
    France: [
      {
        question: "En quelle année Clovis a-t-il été baptisé ?",
        answer: "498",
      },
      {
        question: "Qui était le roi des Francs avant Clovis ?",
        answer: "Childeric Ier",
      },
      {
        question: "Quel roi a fondé la dynastie des Mérovingiens ?",
        answer: "Clovis",
      },
      {
        question: "Quel est le nom du fils de Clovis qui lui succéda ?",
        answer: "Childebert Ier",
      },
      {
        question: "En quelle année Charlemagne a-t-il été couronné empereur ?",
        answer: "800",
      },
      {
        question: "Quel était le titre de Charlemagne avant de devenir empereur ?",
        answer: "Roi des Francs",
      },
      {
        question: "Quelle bataille décida de l'unification des royaumes francs sous Clovis ?",
        answer: "La bataille de Soissons",
      },
      {
        question: "Quel roi a mis fin à l'empire carolingien ?",
        answer: "Charles le Chauve",
      },
      {
        question: "En quelle année a eu lieu le sacre de Pépin le Bref ?",
        answer: "752",
      },
      {
        question: "Quel est le nom du premier roi de la dynastie capétienne ?",
        answer: "Hugues Capet",
      },
      {
        question: "Quel événement a marqué la fin de la dynastie mérovingienne ?",
        answer: "Le sacre de Pépin le Bref",
      },
      {
        question: "En quelle année le traité de Verdun a-t-il été signé ?",
        answer: "843",
      },
      {
        question: "Qui était le roi de France lors de la bataille d'Azincourt ?",
        answer: "Charles VI",
      },
      {
        question: "Quel roi a créé la Sainte-Chapelle à Paris ?",
        answer: "Louis IX",
      },
      {
        question: "Quel roi de France est connu pour sa construction du château de Versailles ?",
        answer: "Louis XIV",
      },
      {
        question: "Quel roi est à l'origine de la construction de la cathédrale Notre-Dame de Paris ?",
        answer: "Louis VII",
      },
      {
        question: "Quel roi a commencé à édifier la cathédrale de Reims ?",
        answer: "Hugues Capet",
      },
      {
        question: "Quelle bataille a opposé Charles Martel aux Sarrasins en 732 ?",
        answer: "La bataille de Poitiers",
      },
      {
        question: "Quel est le nom de l'empereur romain qui a pris possession de la Gaule en 58 av. J.-C. ?",
        answer: "Jules César",
      },
      {
        question: "Quel est le nom de la ville où Clovis fut couronné roi des Francs ?",
        answer: "Reims",
      },
      {
        question: "Qui a fondé l'abbaye de Cluny en 910 ?",
        answer: "Guillaume Ier d'Aquitaine",
      },
      {
        question: "Quel est le nom du traité signé en 843 divisant l'Empire carolingien ?",
        answer: "Le traité de Verdun",
      },
      {
        question: "Quelle dynastie a régné sur la France pendant 800 ans ?",
        answer: "La dynastie des Capétiens",
      },
      {
        question: "Qui a régné sur la France après la mort de Charlemagne ?",
        answer: "Louis le Pieux",
      },
      {
        question: "En quelle année a eu lieu la bataille de Bouvines ?",
        answer: "1214",
      },
      {
        question: "Quel événement a marqué le début de la guerre de Cent Ans ?",
        answer: "La bataille de Crécy en 1346",
      },
      {
        question: "Quel roi a instauré la monarchie absolue en France ?",
        answer: "Louis XIV",
      },
      {
        question: "En quelle année a eu lieu le mariage de Louis XVI et Marie-Antoinette ?",
        answer: "1770",
      },
      {
        question: "Quel roi de France est connu pour sa politique de centralisation ?",
        answer: "Louis XIV",
      },
      {
        question: "Quel traité a mis fin à la guerre de Cent Ans en 1453 ?",
        answer: "Le traité de Picquigny",
      },
    
      {
        question: "Quel est le nom du roi qui a signé l'ordonnance de Villers-Cotterêts en 1539 ?",
        answer: "François Ier",
      },
      {
        question: "En quelle année a été signée l'ordonnance de Villers-Cotterêts ?",
        answer: "1539",
      },
      {
        question: "Quel est le nom du dernier roi mérovingien ?",
        answer: "Childeric III",
      },
      {
        question: "Quel est le nom du roi qui a fondé la monarchie capétienne ?",
        answer: "Hugues Capet",
      },
      {
        question: "Quel est le nom de la guerre qui a opposé la France et l'Angleterre de 1337 à 1453 ?",
        answer: "La guerre de Cent Ans",
      },
      {
        question: "Quel roi a donné l'Edit de Nantes en 1598 ?",
        answer: "Henri IV",
      },
      {
        question: "En quelle année est né le roi François Ier ?",
        answer: "1494",
      },
      {
        question: "Quel roi de France a créé la Compagnie des Indes ?",
        answer: "Louis XIV",
      },
      {
        question: "Quel est le nom de la guerre civile qui a éclaté en France en 1562 ?",
        answer: "Les guerres de Religion",
      },
      {
        question: "Qui a écrit les mémoires sur la guerre de Cent Ans ?",
        answer: "Jean Froissart",
      },
      {
        question: "Quel est le nom de la famille royale qui a régné sur la France durant la guerre de Cent Ans ?",
        answer: "Les Valois",
      },
      {
        question: "Qui a signé l'Edit de Nantes en 1598 ?",
        answer: "Henri IV",
      },
      {
        question: "En quelle année le roi Philippe IV a-t-il détruit l'ordre des Templiers ?",
        answer: "1307",
      },
      {
        question: "Quel est le nom de l'abbaye fondée par Saint-Benoît de Nursie en 529 ?",
        answer: "L'abbaye de Cluny",
      },
      {
        question: "Quel est le nom du traité signé en 843 qui a partagé l'empire carolingien ?",
        answer: "Le traité de Verdun",
      },
      {
        question: "Quel est le nom du roi qui a régné lors de la construction de la cathédrale de Chartres ?",
        answer: "Louis IX",
      },
      {
        question: "En quelle année Henri IV a-t-il abjuré le protestantisme pour se convertir au catholicisme ?",
        answer: "1593",
      },
      {
        question: "Quel roi de France a créé l'Académie française ?",
        answer: "Louis XIII",
      },
      
   
     
      {
        question: "Quel roi est connu pour avoir pris part à la croisade contre les Albigeois ?",
        answer: "Louis VIII",
      },
     
     
      {
        question: "Quel est le nom du roi qui a perdu la bataille de Poitiers en 1356 ?",
        answer: "Jean II le Bon",
      },
      {
        question: "Quel est le nom du fils de Louis IX, qui fut aussi roi de France ?",
        answer: "Philippe III",
      },
      {
        question: "Quel est le nom du roi de France qui a été excommunié par le pape Boniface VIII en 1303 ?",
        answer: "Philippe le Bel",
      },
      {
        question: "Quel est le nom du roi de France qui a été assassiné par un moine en 1610 ?",
        answer: "Henri IV",
      },
      {
        question: "Quel est le nom du roi qui a régné pendant la 2de guerre de Cent Ans ?",
        answer: "Charles VI",
      },
      {
        question: "Quel est le nom du roi qui a régné pendant la période de la Fronde ?",
        answer: "Louis XIV",
      },
      {
        question: "Quel est le nom du traité signé en 843 entre les trois petits-fils de Charlemagne ?",
        answer: "Le traité de Verdun",
      },
      {
        question: "Quel est le nom du roi qui a fondé la ville de Paris ?",
        answer: "Clovis",
      },
   
      {
        question: "Quel est le nom du roi de France qui a instauré l'ordonnance de Villers-Cotterêts en 1539 ?",
        answer: "François Ier",
      }
    ]
    ,
    Géographie: [
      
  {
    question: "Qui a peint 'La Nuit étoilée' ?",
    answer: "Vincent van Gogh"
  },
  {
    question: "En quelle année a eu lieu le premier alunissage ?",
    answer: "1969"
  },
  {
    question: "Qui a écrit '1984' ?",
    answer: "George Orwell"
  },
  {
    question: "Quel élément chimique a pour symbole 'Fe' ?",
    answer: "Le fer"
  },
  {
    question: "Combien de notes dans une gamme majeure ?",
    answer: "Sept"
  },
  {
    question: "Quel est l’organe principal de la respiration ?",
    answer: "Les poumons"
  },
  {
    question: "Qui a formulé la théorie de la relativité ?",
    answer: "Albert Einstein"
  },
  {
    question: "Quel est l’animal terrestre le plus rapide ?",
    answer: "Le guépard"
  },
  {
    question: "Combien y a-t-il de planètes dans le système solaire ?",
    answer: "Huit"
  },
  {
    question: "Quelle est la plus grande planète du système solaire ?",
    answer: "Jupiter"
  },
  {
    question: "Qui a peint la Joconde ?",
    answer: "Léonard de Vinci"
  },
  {
    question: "Quel métal liquide est utilisé dans les thermomètres ?",
    answer: "Le mercure"
  },
  {
    question: "Quelle est la formule chimique de l’eau ?",
    answer: "H₂O"
  },
  {
    question: "Dans quel pays a été inventé le papier ?",
    answer: "La Chine"
  },
  {
    question: "Quel est le plus petit os du corps humain ?",
    answer: "L’étrier"
  },
  {
    question: "Quel est le symbole chimique de l’or ?",
    answer: "Au"
  },
  {
    question: "Quelle invention est associée à Alexander Graham Bell ?",
    answer: "Le téléphone"
  },
  {
    question: "Quelle est la vitesse de la lumière dans le vide ?",
    answer: "Environ 300 000 km/s"
  },
  {
    question: "Que mesure un baromètre ?",
    answer: "La pression atmosphérique"
  },
  {
    question: "Combien de dents a un adulte normalement ?",
    answer: "32"
  },
  {
    question: "Quel est le plus grand organe du corps humain ?",
    answer: "La peau"
  },
  {
    question: "Qui a écrit 'Le Meilleur des Mondes' ?",
    answer: "Aldous Huxley"
  },
  {
    question: "Quel gaz les plantes absorbent-elles ?",
    answer: "Le dioxyde de carbone"
  },
  {
    question: "Quel est l’organe qui pompe le sang ?",
    answer: "Le cœur"
  },
  {
    question: "Quel est le plus grand mammifère marin ?",
    answer: "La baleine bleue"
  },
  {
    question: "Que signifie 'www' dans une adresse web ?",
    answer: "World Wide Web"
  },
  {
    question: "En informatique, que signifie HTML ?",
    answer: "HyperText Markup Language"
  },
  {
    question: "Qui est l’inventeur de l’ampoule électrique ?",
    answer: "Thomas Edison"
  },
  {
    question: "Quelle est l’unité de mesure de la fréquence ?",
    answer: "Le hertz"
  },
  {
    question: "Quel est le nom du processus par lequel les plantes fabriquent leur nourriture ?",
    answer: "La photosynthèse"
  },
  {
    question: "Qui est l’auteur de 'Roméo et Juliette' ?",
    answer: "William Shakespeare"
  },
  
  {
    question: "Que mesure un thermomètre ?",
    answer: "La température"
  },
  {
    question: "Quelle est la planète la plus proche du Soleil ?",
    answer: "Mercure"
  },
  {
    question: "Quel animal pond des œufs et allaite ses petits ?",
    answer: "L’ornithorynque"
  },
  {
    question: "Quel est le nom scientifique du sucre de table ?",
    answer: "Le saccharose"
  },
  {
    question: "Quel est l’état de l’eau à 0 °C ?",
    answer: "Solide (glace)"
  },
  {
    question: "Quel organe filtre le sang ?",
    answer: "Les reins"
  },
  {
    question: "Que signifie l’acronyme USB ?",
    answer: "Universal Serial Bus"
  },
  {
    question: "Quel est le nom du satellite naturel de la Terre ?",
    answer: "La Lune"
  },
  {
    question: "Que signifie ADN ?",
    answer: "Acide désoxyribonucléique"
  },
  {
    question: "Combien de pattes possède une araignée ?",
    answer: "Huit"
  },
  {
    question: "Quel est le chiffre romain pour 50 ?",
    answer: "L"
  },
  {
    question: "Quel est le gaz essentiel à la respiration humaine ?",
    answer: "L’oxygène"
  },
  {
    question: "Quel est le nom de l’effet qui modifie le son selon la vitesse ?",
    answer: "L’effet Doppler"
  },
  {
    question: "Quelle est la température normale du corps humain ?",
    answer: "37 °C"
  },
  {
    question: "Quel est l’organe de la parole ?",
    answer: "Le larynx"
  },
  {
    question: "Quel est le nom du télescope spatial lancé en 1990 ?",
    answer: "Hubble"
  },
  {
    question: "Quel est le nom du processus de changement d’état de liquide à gaz ?",
    answer: "L’évaporation"
  },
  {
    question: "Quelle est la racine carrée de 144 ?",
    answer: "12"
  },
  {
    question: "Combien de zéros dans un milliard ?",
    answer: "Neuf"
  },
  {
    question: "Quel est le plus grand désert du monde ?",
    answer: "L’Antarctique"
  },
  {
    question: "Quel est le rôle des globules rouges ?",
    answer: "Transporter l’oxygène"
  },
  
  {
    question: "Quel est l’élément chimique numéro 1 ?",
    answer: "L’hydrogène"
  },
  {
    question: "Combien de côtés a un octogone ?",
    answer: "Huit"
  },
  {
    question: "Quelle planète est surnommée 'la planète rouge' ?",
    answer: "Mars"
  },
  {
    question: "Quelle est la fonction principale des globules blancs ?",
    answer: "Combattre les infections"
  },
  {
    question: "Quelle est l’unité de mesure de l’énergie ?",
    answer: "Le joule"
  },
  {
    question: "Quel est l’organe qui permet de goûter ?",
    answer: "La langue"
  },
  {
    question: "Quel est le nom du phénomène qui fait apparaître un arc dans le ciel ?",
    answer: "Un arc-en-ciel"
  },
  {
    question: "Combien de vertèbres dans la colonne humaine ?",
    answer: "33"
  },
  {
    question: "Quel scientifique a découvert la loi de la gravité ?",
    answer: "Isaac Newton"
  },
  {
    question: "Quel est le nom du gaz utilisé dans les ballons gonflables ?",
    answer: "L’hélium"
  },
  {
    question: "Quelle est la planète la plus chaude du système solaire ?",
    answer: "Vénus"
  },
  {
    question: "Quel est le nom de la couche qui protège la Terre des UV ?",
    answer: "La couche d’ozone"
  },
  {
    question: "Quelle est la molécule qui transporte l’oxygène dans le sang ?",
    answer: "L’hémoglobine"
  },
  {
    question: "Quel est le plus grand océan de la Terre ?",
    answer: "L’océan Pacifique"
  },
  {
    question: "Quelle science étudie les comportements humains ?",
    answer: "La psychologie"
  },
  {
    question: "Comment s’appelle l’étude des champignons ?",
    answer: "La mycologie"
  },
  {
    question: "Quel instrument mesure les tremblements de terre ?",
    answer: "Le sismographe"
  },
  {
    question: "Combien de paires de chromosomes chez l’humain ?",
    answer: "23 paires"
  },
 
 {
    question: "Quel pays possède le plus grand nombre d’îles ?",
    answer: "La Suède",
  },
  {
    question: "Quelle mer borde la côte est de l’Espagne ?",
    answer: "La mer Méditerranée",
  },
  {
    question: "Quelle est la capitale de l'Écosse ?",
    answer: "Édimbourg",
  },
  {
    question: "Quel est le plus haut sommet de l’Afrique ?",
    answer: "Le Kilimandjaro",
  },
  {
    question: "Quel est le plus petit pays du monde ?",
    answer: "Le Vatican",
  },
  {
    question: "Quel pays partage une frontière avec les États-Unis au sud ?",
    answer: "Le Mexique",
  },
  {
    question: "Quelle est la capitale de l’Indonésie ?",
    answer: "Jakarta",
  },
  {
    question: "Quel est le principal fleuve qui traverse l’Égypte ?",
    answer: "Le Nil",
  },
  {
    question: "Dans quel pays se trouve la ville de Marrakech ?",
    answer: "Le Maroc",
  },
  {
    question: "Quel est le plus grand lac d’eau douce au monde par superficie ?",
    answer: "Le lac Supérieur",
  },
  {
    question: "Quelle est la capitale de la Roumanie ?",
    answer: "Bucarest",
  },
  {
    question: "Quelle est la capitale de la Thaïlande ?",
    answer: "Bangkok",
  },
  {
    question: "Quel pays a pour capitale Reykjavik ?",
    answer: "L’Islande",
  },
  {
    question: "Quel fleuve traverse Londres ?",
    answer: "La Tamise",
  },
  {
    question: "Quel pays a pour capitale Varsovie ?",
    answer: "La Pologne",
  },
  {
    question: "Quelle mer est située entre l’Italie et les Balkans ?",
    answer: "La mer Adriatique",
  },
  {
    question: "Quel pays est surnommé le pays du Matin Calme ?",
    answer: "La Corée du Sud",
  },
  {
    question: "Quel pays est traversé par l’équateur et le méridien de Greenwich ?",
    answer: "Le Gabon",
  },
  {
    question: "Quelle ville est surnommée la Ville Éternelle ?",
    answer: "Rome",
  },
  {
    question: "Dans quel pays se trouve le mont Fuji ?",
    answer: "Le Japon",
  },
  {
    question: "Quel est le nom du désert qui couvre une grande partie de la Chine et de la Mongolie ?",
    answer: "Le désert de Gobi",
  },
  {
    question: "Quelle est la capitale du Nigeria ?",
    answer: "Abuja",
  },
  {
    question: "Quelle est la ville la plus peuplée du Canada ?",
    answer: "Toronto",
  },
  {
    question: "Quel est le plus grand archipel du monde ?",
    answer: "L’Indonésie",
  },
  {
    question: "Quelle ville est située sur deux continents ?",
    answer: "Istanbul",
  },

      {
        question: "Quel est le plus grand désert du monde ?",
        answer: "Antarctique",
      },
      {
        question: "Quel est le plus long fleuve du monde ?",
        answer: "Le Nil",
      },
      {
        question: "Quelle est la capitale du Japon ?",
        answer: "Tokyo",
      },
      {
        question: "Combien de continents y a-t-il sur Terre ?",
        answer: "7",
      },
      {
        question: "Quel est le plus grand océan du monde ?",
        answer: "Océan Pacifique",
      },
      {
        question: "Quel est le pays le plus peuplé du monde ?",
        answer: "La Chine",
      },
      {
        question: "Quel pays est surnommé le pays du soleil levant ?",
        answer: "Le Japon",
      },
      {
        question: "Quel est le pays le plus vaste du monde ?",
        answer: "La Russie",
      },
      {
        question: "Quel est le plus haut sommet du monde ?",
        answer: "L'Everest",
      },
      {
        question: "Quel est le plus grand lac d'eau douce du monde ?",
        answer: "Le lac Baïkal",
      },
      {
        question: "Quel est le plus grand archipel du monde ?",
        answer: "Les Philippines",
      },
      {
        question: "Dans quel océan se trouve la Grande Barrière de Corail ?",
        answer: "Océan Pacifique",
      },
      {
        question: "Quel est le plus grand pays d'Afrique ?",
        answer: "L'Algérie",
      },
   
      {
        question: "Quel pays est connu sous le nom de 'Terre de feu' ?",
        answer: "L'Argentine",
      },
      {
        question: "Quelle mer borde la côte sud de la France ?",
        answer: "La mer Méditerranée",
      },
      {
        question: "Quelle est la capitale de l'Australie ?",
        answer: "Canberra",
      },
      {
        question: "Quel est le plus grand désert chaud du monde ?",
        answer: "Le désert du Sahara",
      },
      {
        question: "Quel est le pays d'origine de la Pyramide de Gizeh ?",
        answer: "L'Égypte",
      },
      {
        question: "Quel est le pays le plus petit d'Europe ?",
        answer: "Le Vatican",
      },
      {
        question: "Dans quel pays se trouve la ville de Machu Picchu ?",
        answer: "Le Pérou",
      },
      {
        question: "Quelle est la plus grande île du monde ?",
        answer: "Groenland",
      },
      {
        question: "Quel est le plus grand pays de l'Amérique du Sud ?",
        answer: "Le Brésil",
      },
      {
        question: "Quel pays possède le plus grand nombre de volcans actifs ?",
        answer: "L'Indonésie",
      },
      {
        question: "Dans quel pays se trouve le Mont Fuji ?",
        answer: "Le Japon",
      },
      {
        question: "Dans quel pays se trouve le Lac Titicaca ?",
        answer: "Le Pérou et la Bolivie",
      },
      {
        question: "Quel est le pays avec le plus grand nombre d'îles ?",
        answer: "Suède",
      },
      {
        question: "Dans quel pays se trouve la montagne de l'Atlas ?",
        answer: "Le Maroc",
      },
      {
        question: "Quel est le plus grand pays d'Asie du Sud-Est ?",
        answer: "L'Indonésie",
      },
      {
        question: "Quel est le plus long fleuve de France ?",
        answer: "La Loire",
      },
      {
        question: "Quel est le plus grand pays d'Amérique du Nord ?",
        answer: "Le Canada",
      },
      {
        question: "Quel est le plus petit continent du monde ?",
        answer: "L'Océanie",
      },
      {
        question: "Quel pays se trouve à la fois en Europe et en Asie ?",
        answer: "La Turquie",
      },
      {
        question: "Quel pays est connu pour sa forme de botte ?",
        answer: "L'Italie",
      },
      {
        question: "Quel est le pays qui a le plus de frontières avec d'autres pays ?",
        answer: "La Russie",
      },
      {
        question: "Quel est le nom du plus grand volcan actif de la Terre ?",
        answer: "Le Mauna Loa",
      },
      {
        question: "Quel pays possède l'île de Madagascar ?",
        answer: "Madagascar",
      },
      {
        question: "Dans quel pays se trouve le désert de Gobi ?",
        answer: "La Mongolie",
      },
      {
        question: "Quel est le fleuve le plus long d'Amérique du Sud ?",
        answer: "L'Amazone",
      },
      {
        question: "Quel est le plus haut volcan du monde ?",
        answer: "Le Nevado Ojos del Salado",
      },
      {
        question: "Quel est le plus petit océan du monde ?",
        answer: "L'océan Arctique",
      },
      {
        question: "Quel est le plus grand pays de l'Océanie ?",
        answer: "L'Australie",
      },
      {
        question: "Quelle est la capitale de l'Allemagne ?",
        answer: "Berlin",
      },
      {
        question: "Quelle est la capitale de l'Italie ?",
        answer: "Rome",
      },
      {
        question: "Quel est le plus grand pays d'Amérique centrale ?",
        answer: "Le Nicaragua",
      },
      {
        question: "Quel pays a pour capitale Copenhague ?",
        answer: "Le Danemark",
      },
      {
        question: "Quel est le plus grand archipel d'Asie ?",
        answer: "Les Philippines",
      },
      {
        question: "Quelle mer borde la côte nord de la France ?",
        answer: "La mer du Nord",
      },
      {
        question: "Quel est le plus grand pays d'Afrique de l'Est ?",
        answer: "L'Éthiopie",
      },
      {
        question: "Dans quel pays se trouve le Mont Everest ?",
        answer: "Le Népal et la Chine",
      },
      {
        question: "Quel est le plus grand lac d'Afrique ?",
        answer: "Le lac Victoria",
      },
      {
        question: "Quel est le plus grand lac d'Asie ?",
        answer: "Le lac Caspien",
      },
      {
        question: "Dans quel océan se trouve l'île de Pâques ?",
        answer: "Océan Pacifique",
      },
      {
        question: "Quel est le pays le plus petit du monde ?",
        answer: "Le Vatican",
      },
      {
        question: "Quel est le nom de l'archipel le plus peuplé du monde ?",
        answer: "Les Philippines",
      },
      {
        question: "Quel est le pays d'origine du Taj Mahal ?",
        answer: "L'Inde",
      },
      {
        question: "Quel est le nom du plus grand lac salé du monde ?",
        answer: "Le lac Urmia",
      },
      {
        question: "Dans quel pays se trouve la vallée de la mort ?",
        answer: "Les États-Unis",
      },
      {
        question: "Dans quel pays se trouve la ville de Sydney ?",
        answer: "L'Australie",
      },
      {
        question: "Quel est le pays le plus au nord du monde ?",
        answer: "Le Groenland",
      },
      {
        question: "Quel est le pays le plus au sud du monde ?",
        answer: "L'Antarctique",
      },
      {
        question: "Quel est le plus grand pays d'Afrique centrale ?",
        answer: "Le Congo",
      },
      {
        question: "Dans quel pays se trouve la ville de New York ?",
        answer: "Les États-Unis",
      },
      {
        question: "Quel pays a pour capitale Moscou ?",
        answer: "La Russie",
      },
      {
        question: "Dans quel pays se trouve l'île de Bali ?",
        answer: "L'Indonésie",
      },
      {
        question: "Quel est le plus petit pays d'Asie ?",
        answer: "Maldives",
      },
      {
        question: "Dans quel océan se trouve l'île de Madagascar ?",
        answer: "Océan Indien",
      },
      {
        question: "Quel est le nom de la mer qui sépare l'Europe de l'Afrique ?",
        answer: "La mer Méditerranée",
      },
      {
        question: "Quel est le plus grand pays d'Amérique du Nord ?",
        answer: "Le Canada",
      },
      {
        question: "Quel est le plus grand pays d'Afrique du Sud ?",
        answer: "L'Afrique du Sud",
      },
      {
        question: "Quel est le plus grand désert chaud du monde ?",
        answer: "Le Sahara",
      },
      {
        question: "Quel est le nom de la plus grande ville d'Afrique ?",
        answer: "Lagos",
      },
      {
        question: "Quelle chaîne de montagnes est la plus haute du monde ?",
        answer: "L'Himalaya",
      },
      {
        question: "Quel est le plus grand pays d'Amérique Latine ?",
        answer: "Le Brésil",
      },
      {
        question: "Dans quel pays se trouve la vallée du Rift ?",
        answer: "L'Afrique de l'Est",
      },
      {
        question: "Dans quel pays se trouve le Mont Kilimandjaro ?",
        answer: "La Tanzanie",
      },
      {
        question: "Quel est le pays avec la plus grande superficie de forêts ?",
        answer: "La Russie",
      }, {
    question: "Quelle est la capitale de la Nouvelle-Zélande ?",
    answer: "Wellington",
  },
  {
    question: "Quel pays est entièrement enclavé dans l'Afrique du Sud ?",
    answer: "Le Lesotho",
  },
  {
    question: "Quel est le pays le plus montagneux du monde ?",
    answer: "Le Bhoutan",
  },
  {
    question: "Quelle est la plus grande île de la mer Méditerranée ?",
    answer: "La Sicile",
  },
  {
    question: "Quel est le plus grand pays sans accès à la mer ?",
    answer: "Le Kazakhstan",
  },
  {
    question: "Quel est le plus long fleuve d’Europe ?",
    answer: "La Volga",
  },
  {
    question: "Quel pays a la plus grande densité de population ?",
    answer: "Monaco",
  },
  {
    question: "Quelle chaîne de montagnes traverse toute l’Amérique du Sud ?",
    answer: "Les Andes",
  },
  {
    question: "Quel désert est surnommé le désert rouge ?",
    answer: "Le désert de Simpson",
  },
  {
    question: "Quel est le pays le plus plat du monde ?",
    answer: "Les Maldives",
  },
  {
    question: "Quel est le point le plus bas sur Terre ?",
    answer: "La mer Morte",
  },
  {
    question: "Quel est le plus grand delta du monde ?",
    answer: "Le delta du Gange",
  },
  {
    question: "Quelle est la mer la plus salée au monde ?",
    answer: "La mer Morte",
  },
  {
    question: "Quelle est la capitale de la Mongolie ?",
    answer: "Oulan-Bator",
  },
  {
    question: "Quel pays se trouve entre la France, l’Allemagne et la Belgique ?",
    answer: "Le Luxembourg",
  },
  {
    question: "Dans quel pays peut-on visiter le site antique de Petra ?",
    answer: "La Jordanie",
  },
  {
    question: "Quelle est la capitale de la Finlande ?",
    answer: "Helsinki",
  },
  {
    question: "Quel détroit sépare l’Europe de l’Asie en Turquie ?",
    answer: "Le Bosphore",
  },
  {
    question: "Quelle rivière traverse Paris ?",
    answer: "La Seine",
  },
  {
    question: "Quel volcan a détruit la ville antique de Pompéi ?",
    answer: "Le Vésuve",
  },
  {
    question: "Quel pays est célèbre pour ses fjords ?",
    answer: "La Norvège",
  },
   {
    question: "Quel est le village anciennement nommé le \"pays des loups\" ?",
    answer: "Laloubère",
  },
  {
    question: "Quelle île française se trouve à l’est de Madagascar ?",
    answer: "La Réunion",
  },
  {
    question: "Quel pays africain n’a jamais été colonisé ?",
    answer: "L’Éthiopie",
  },
  {
    question: "Dans quel pays se trouve le Cap Nord ?",
    answer: "La Norvège",
  },
  {
    question: "Quelle est la capitale de la Corée du Sud ?",
    answer: "Séoul",
  }
    ]
    ,
    Général: [
       {
        "question": "Qui est le père de la philosophie?",
        "answer": "Thalès"
      },
       {
        "question": "Qui était le maitre de Platon?",
        "answer": "Socrate"
      },
       {
        "question": "Quel philosophe a connu Alexandre Le Grand?",
        "answer": "Aristote"
      },
      {
        "question": "Quel philosophe sépare la morale de la politique?",
        "answer": "Machiavel"
      },
      {
        "question": "Quel philosophe voit l'esprit humain comme une \"tabula rasa\"?",
        "answer": "John Locke"
      },
      {
        "question": "Quel philosophe a théorisé le Dasein?",
        "answer": "Heidegger"
      },
      {
        "question": "Quel philosophe a utilisé le doute hyperbolique?",
        "answer": "Descartes"
      },
      {
        "question": "Qui cherché en dehors de lui alors que Dieu étais à l'intérieur?",
        "answer": "St Augustin d'Hiponne"
      },
          {
        "question": "Qui a écris les Sommes Théologiques?",
        "answer": "St Thomas d'Aquin"
      },
          {
        "question": "Quel philosophe théorise l'apprentissage par négation?",
        "answer": "Hegel"
      },
       {
        "question": "Quel philosophe théorise les monades?",
        "answer": "Leibniz"
      },
       {
        "question": "A quel philosophe doit-on la théorie de la caverne?",
        "answer": "Platon"
      },
      {
        "question": "Quel est le premier philosophe à s'intéresser au bonheur individuel?",
        "answer": "Epicure"
      },
      {
        "question": "A qui doit-on, la phrase \"Esse est percipi\"?",
        "answer": "Berkeley"
      },
        {
        "question": "A qui doit-on, la phrase \"Homo homini lupus\"?",
        "answer": "Thomas Hobbes"
      },
       {
        "question": "A qui doit-on, la phrase \"Deus sive natura\"?",
        "answer": "Baruch Spinoza"
      },
       {
        "question": "A qui doit-on, la phrase \"On se baigne jamais dans le même fleuve\"?",
        "answer": "Héraclite"
      },
       {
        "question": "Le monisme est une doctrine inventé par?",
        "answer": "Parménide"
      },
   {
  "question": "Quel philosophe grec est connu pour avoir utilisé la maïeutique ?",
  "answer": "Socrate"
}
,
       {
        "question": "Pour quel philosophe il n'y a aucune idée sans impression?",
        "answer": "David Hume"
      },
        {
        "question": "Zarathoustra représente quelle notion?",
        "answer": "Le surhomme"
      },
       {
        "question": "Qui différencie le phénomène du noumène et s'inspire du boudhisme?",
        "answer": "Schopenhauer"
      },
      {
        "question": "Quel philosophe est le premier à néoplatonisé l'islam?",
        "answer": "Al-Farabi"
      },
      {
        "question": "Qui est le fondateur de la psychanalyse?",
        "answer": "Sigmund Freud"
      },
       {
        "question": "Quel philosophe aurait parlé à la 'dame philosophie'?",
        "answer": "Boèce"
      },
      {
        "question": "Quelle expérience de pensée célèbre Avicenne a-t-il formulée ?",
        "answer": "L'homme volant"
      },
      {
        "question": "Où Albert le Grand a enseigné Thomas d'Aquin?",
        "answer": "Cologne"
      },
       {
        "question": "A qui doit-on le \"to on te on \"?",
        "answer": "Aristote"
      },
      {
        "question": "Quel est le symbole chimique de l'eau?",
        "answer": "H2O"
      },
      {
        "question": "Quel est le nom de l'inventeur de l'ampoule électrique?",
        "answer": "Thomas Edison"
      },
      {
        "question": "Quel est le nombre de côtés d'un hexagone?",
        "answer": "Six"
      },
      {
        "question": "Quelle est l'unité de mesure de la fréquence?",
        "answer": "Hertz"
      },
      {
        "question": "Quel est le nombre d'électrons dans un atome d'hydrogène neutre?",
        "answer": "Un"
      },
      {
        "question": "Comment appelle-t-on une figure géométrique à huit côtés?",
        "answer": "Un octogone"
      },
      {
        "question": "Quel est le nom du premier satellite artificiel envoyé dans l'espace?",
        "answer": "Spoutnik"
      },
      {
        "question": "Quelle est la principale source d'énergie de la Terre?",
        "answer": "Le Soleil"
      },
      {
        "question": "Quel gaz constitue la majorité de l'atmosphère terrestre?",
        "answer": "Azote"
      },
      {
        "question": "Quel est le nom du tableau le plus célèbre de Léonard de Vinci?",
        "answer": "La Joconde"
      },
      {
        "question": "Comment appelle-t-on un polygone avec 12 côtés?",
        "answer": "Un dodécagone"
      },
      {
        "question": "Quelle est la formule chimique du dioxyde de carbone?",
        "answer": "CO2"
      },
      {
        "question": "Quel métal est le meilleur conducteur d'électricité?",
        "answer": "L'argent"
      },
      {
        "question": "Comment s'appelle la couche externe du Soleil visible lors d'une éclipse?",
        "answer": "La couronne solaire"
      },
      {
        "question": "Quel est le nombre de bits dans un octet?",
        "answer": "8"
      },
      {
        "question": "Quel est le seul mammifère capable de voler?",
        "answer": "La chauve-souris"
      },
      {
        "question": "Comment s'appelle le processus par lequel les plantes produisent de l'énergie à partir de la lumière?",
        "answer": "La photosynthèse"
      },
      {
        "question": "Quel est l'ingrédient principal du verre?",
        "answer": "Le sable (silice)"
      },
      {
        "question": "Comment appelle-t-on un animal qui mange à la fois des plantes et de la viande?",
        "answer": "Omnivore"
      },
      {
        "question": "Quel est le plus grand nombre premier inférieur à 10?",
        "answer": "7"
      },
      {
        "question": "Quel est le terme pour une étoile mourante qui explose?",
        "answer": "Une supernova"
      },
      {
        "question": "Quelle est la vitesse approximative de la lumière dans le vide?",
        "answer": "300 000 km/s"
      },
      {
        "question": "Quel est l'élément chimique dont le symbole est Fe?",
        "answer": "Fer"
      },
      {
        "question": "Comment appelle-t-on une ligne droite qui coupe un cercle en deux parties égales?",
        "answer": "Le diamètre"
      },
      {
        "question": "Quel est le nombre total de faces d'un cube?",
        "answer": "6"
      },
      {
        "question": "Quel animal est connu pour son aptitude à construire des barrages?",
        "answer": "Le castor"
      },
      {
        "question": "Quel est le composant chimique essentiel à la respiration des êtres vivants?",
        "answer": "L'oxygène"
      },
      {
        "question": "Quel est le nom du plus petit os du corps humain?",
        "answer": "L'étrier"
      },
      {
        "question": "Quelle est la température d'ébullition de l'eau au niveau de la mer en degrés Celsius?",
        "answer": "100"
      },
      {
        "question": "Quel est l'animal terrestre le plus rapide?",
        "answer": "Le guépard"
      },
      {
        "question": "Quelle unité est utilisée pour mesurer la puissance d'une ampoule?",
        "answer": "Le watt"
      },
      {
        "question": "Quel est le principal composant de l'air que nous respirons?",
        "answer": "L'azote"
      },
      {
        "question": "Quel phénomène est à l'origine de l'arc-en-ciel?",
        "answer": "La réfraction de la lumière"
      },
      {
        "question": "Comment appelle-t-on une molécule formée de plusieurs unités répétées?",
        "answer": "Un polymère"
      },
      {
        "question": "Quel est le point commun entre le mercure, le bromure et l'eau?",
        "answer": "Ce sont des liquides à température ambiante"
      },
      {
        "question": "Quel élément chimique a pour symbole Na?",
        "answer": "Sodium"
      },
      {
        "question": "Quel est le plus grand organe du corps humain?",
        "answer": "La peau"
      },
      {
        "question": "Quel gaz est utilisé pour gonfler les ballons dirigeables modernes?",
        "answer": "L'hélium"
      },
      {
        "question": "Quel est le nom de l'étoile la plus proche de la Terre après le Soleil?",
        "answer": "Proxima Centauri"
      },
      {
        "question": "Comment appelle-t-on un atome qui a perdu ou gagné un ou plusieurs électrons?",
        "answer": "Un ion"
      },
      {
        "question": "Quel est le point d'ébullition de l'azote liquide en degrés Celsius?",
        "answer": "-196"
      },
      {
        "question": "Quel est le nom de la partie la plus interne de la Terre?",
        "answer": "Le noyau"
      },
      {
        "question": "Comment appelle-t-on l'étude des couches géologiques de la Terre?",
        "answer": "La stratigraphie"
      },
      {
        "question": "Quel est l'élément chimique avec le numéro atomique 79?",
        "answer": "L'or"
      },
      {
        "question": "Quel est le nom de la ceinture située entre Mars et Jupiter?",
        "answer": "La ceinture d'astéroïdes"
      },
      {
        "question": "Quel est le nom de la théorie selon laquelle l'univers est en expansion?",
        "answer": "La théorie du Big Bang"
      },
      {
        "question": "Quelle est la formule chimique du méthane?",
        "answer": "CH4"
      },
      {
        "question": "Comment appelle-t-on un triangle qui a deux côtés de même longueur?",
        "answer": "Un triangle isocèle"
      },
      {
        "question": "Comment s'appelle la plus petite unité de matière?",
        "answer": "L'atome"
      },
      {
        "question": "Quel est le liquide le plus visqueux au monde connu?",
        "answer": "La poix (bitume naturel)"
      },
      {
        "question": "Quel est le nombre total d'angles dans un triangle?",
        "answer": "180 degrés"
      },
      {
        "question": "Quel type de liaison chimique implique le partage d'électrons?",
        "answer": "Liaison covalente"
      },
      {
        "question": "Quel type de particule subatomique porte une charge négative?",
        "answer": "L'électron"
      },
      {
        "question": "Quelle planète est surnommée la Planète Rouge?",
        "answer": "Mars"
      },
      {
        "question": "Quel phénomène naturel produit des charges électriques dans le ciel?",
        "answer": "Les éclairs"
      },
      {
        "question": "Quel est l'état de la matière avec un volume et une forme fixes?",
        "answer": "Solide"
      },
      {
        "question": "Comment appelle-t-on un changement d'état de solide à gaz sans passer par le liquide?",
        "answer": "Sublimation"
      },
      {
        "question": "Quel est le type de roche formée par la solidification du magma?",
        "answer": "Roche ignée"
      },
      {
        "question": "Quel est le nom donné à une solution qui résiste aux changements de pH?",
        "answer": "Un tampon"
      },
      {
        "question": "Quel type d'onde sonore est au-dessus de la fréquence que les humains peuvent entendre?",
        "answer": "Ultrason"
      },
      {
        "question": "Quelle est la force qui nous maintient sur Terre?",
        "answer": "La gravité"
      },
      {
        "question": "Quelle est l'unité de mesure de la résistance électrique?",
        "answer": "Ohm"
      },
      {
        "question": "Quel élément chimique a pour symbole K?",
        "answer": "Potassium"
      },
      {
        "question": "Quelle est la couleur de la lumière avec la plus grande longueur d'onde visible?",
        "answer": "Rouge"
      },
      {
        "question": "Comment appelle-t-on un liquide qui ne peut pas dissoudre une certaine substance?",
        "answer": "Un solvant non-polaire"
      },
      {
        "question": "Comment appelle-t-on une étoile en phase finale de contraction gravitationnelle?",
        "answer": "Un trou noir"
      },
      {
        "question": "Quel type de miroir fait converger les rayons lumineux?",
        "answer": "Un miroir concave"
      },
      {
        "question": "Comment appelle-t-on le cycle d'eau de la mer vers l'atmosphère, puis au sol?",
        "answer": "Le cycle de l'eau"
      },
      {
        "question": "Comment s'appelle une réaction chimique qui libère de la chaleur?",
        "answer": "Exothermique"
      },
      {
        "question": "Quel est le processus par lequel une étoile produit de l'énergie?",
        "answer": "La fusion nucléaire"
      },
      {
        "question": "Quel est le nom de la couche d'ozone qui protège la Terre des UV?",
        "answer": "La stratosphère"
      },
      {
        "question": "Quel est l'instrument utilisé pour mesurer la pression atmosphérique?",
        "answer": "Le baromètre"
      },
      {
        "question": "Quel métal liquide est utilisé dans les thermomètres traditionnels?",
        "answer": "Le mercure"
      },
      {
        "question": "Quelle est l'unité de mesure de l'énergie?",
        "answer": "Joule"
      },
      {
        "question": "Quel type de mouvement implique une rotation autour d'un axe?",
        "answer": "Le mouvement de rotation"
      },
      {
        "question": "Quel est l'état de la matière trouvé à l'intérieur des étoiles?",
        "answer": "Plasma"
      },
      {
        "question": "Quel est le nom de la molécule qui stocke l'énergie dans les cellules?",
        "answer": "ATP (Adénosine triphosphate)"
      },
      {
        "question": "Quel est le principal composant chimique des os?",
        "answer": "Phosphate de calcium"
      },
      {
        "question": "Quelle est la constante gravitationnelle universelle (G)?",
        "answer": "6,674 × 10⁻¹¹ N·m²/kg²"
      },
      {
        "question": "Quelle est la source principale de vent?",
        "answer": "Les différences de pression atmosphérique"
      },
      {
        "question": "Quel est le plus grand satellite naturel de Saturne?",
        "answer": "Titan"
      },
      {
        "question": "Quel type de matière transmet le son le plus rapidement?",
        "answer": "Les solides"
      },
      {
        "question": "Quel métal précieux a été utilisé dans les premières monnaies?",
        "answer": "L'or"
      },
      {
        "question": "Comment appelle-t-on une éclipse où la Lune est entre le Soleil et la Terre?",
        "answer": "Éclipse solaire"
      },
      {
        "question": "Quel est le processus par lequel une plante perd de l'eau par ses feuilles?",
        "answer": "Transpiration"
      },
      {
        "question": "Quel est l'autre nom de l'étoile Polaire?",
        "answer": "Polaris"
      },
      {
        "question": "Quel est l'élément le plus abondant dans l'univers?",
        "answer": "Hydrogène"
      },
      {
        "question": "Quel est le poids approximatif d'un litre d'eau pure?",
        "answer": "1 kilogramme"
      },
      {
        "question": "Quel est l'autre nom donné à la Voie Lactée?",
        "answer": "La galaxie de la Voie Lactée"
      },
      {
        "question": "Comment appelle-t-on un angle supérieur à 90 degrés?",
        "answer": "Un angle obtus"
      },
      {
        "question": "Quel est le nom du télescope lancé en 1990 pour explorer l'univers?",
        "answer": "Hubble"
      },
      {
        "question": "Quel est le nom de la couche terrestre où se produit le magma?",
        "answer": "Le manteau"
      },
      {
        "question": "Quelle est la particule responsable de la charge positive d'un atome?",
        "answer": "Proton"
      },
      {
        "question": "Quel est le nom de l'étude des insectes?",
        "answer": "L'entomologie"
      },
      {
        "question": "Quelle est la force qui s'oppose au mouvement d'un objet?",
        "answer": "La friction"
      },
      {
        "question": "Quel est le terme pour la température à laquelle une substance fond?",
        "answer": "Point de fusion"
      },
      {
        "question": "Quel est le gaz responsable de l'effet de serre sur Vénus?",
        "answer": "Le dioxyde de carbone"
      },
      {
        "question": "Quel est le nom de la substance qui donne leur couleur verte aux plantes?",
        "answer": "La chlorophylle"
      },
      {
        "question": "Comment appelle-t-on une étoile qui se forme à partir d'un nuage de gaz et de poussières?",
        "answer": "Une proto-étoile"
      }
    ],
  };
  
  export default questions;
  