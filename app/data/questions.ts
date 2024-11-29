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
        "question": "Quel livre commence par 'Au commencement, Dieu créa le ciel et la terre'?",
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
        answer: "496",
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
        answer: "Louis IX (Saint Louis)",
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
        question: "Qui était la reine de France pendant la guerre de Cent Ans ?",
        answer: "Isabelle de France",
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
        question: "Quel est le nom du roi qui a mis en place le Code civil ?",
        answer: "Napoléon Bonaparte",
      },
      {
        question: "Qui a écrit les 'Mémoires d'Outre-Tombe' ?",
        answer: "François-René de Chateaubriand",
      },
      {
        question: "Quel roi a fait détruire le Temple de Jérusalem en 70 ?",
        answer: "Vespasien",
      },
      {
        question: "Quel roi est connu pour avoir pris part à la croisade contre les Albigeois ?",
        answer: "Louis VIII",
      },
      {
        question: "En quelle année les chevaliers du Temple ont-ils été accusés d'hérésie ?",
        answer: "1307",
      },
      {
        question: "Quel est le nom de l'empereur romain qui a réformé l'Empire en 286 ?",
        answer: "Dioclétien",
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
        question: "Quel est le nom du roi qui a régné pendant la guerre de Cent Ans ?",
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
        question: "Quel est le nom du roi qui a été couronné roi des Francs à Reims en 496 ?",
        answer: "Clovis",
      },
      {
        question: "Qui a réformé l'Église française au XVIe siècle ?",
        answer: "François Ier",
      },
      {
        question: "Quel est le nom du roi de France qui a instauré l'ordonnance de Villers-Cotterêts en 1539 ?",
        answer: "François Ier",
      }
    ]
    ,
    Géographie: [
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
        question: "Quel est le plus petit pays du monde ?",
        answer: "Le Vatican",
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
      }
    ]
    ,
    Général: [
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
  