const { ApolloServer, gql } = require("apollo-server");

const questions = [
  {
    id: "1",
    accnum: "",
    reviewed: true,
    title: "Native Priests' Purpose as Evidence",
    library: "AP US History",
    visibility: "Published",
    type: "Multiple choice",
    xml: false,
    question:
      '{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"Which statement "},{"type":"text","marks":[{"type":"strong"}],"text":"best"},{"type":"text","text":" explains how the purpose of the excerpt provides evidence for the idea that the native priests and the Spanish had different worldviews?"}]}]}',
    answers: [
      {
        correct: false,
        answer:
          '{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"By discussing Spanish religious beliefs, the native priests express tolerance for foreign ideas."}]}]}',
        feedback:
          '{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","marks":[{"type":"strong"}],"text":"This answer suggests the student may understand"},{"type":"text","text":" that the general purpose of the excerpt is to reject Spanish ideas."}]},{"type":"paragraph","content":[{"type":"text","marks":[{"type":"strong"}],"text":"However, the student does not understand"},{"type":"text","text":" that the excerpts more specific point is that the native priests are rejecting an attempt by Spanish missionaries to convince them to give up their "ancient traditions" and their belief in "the gods" in order to convert to Christianity."}]}]}'
      },
      {
        correct: true,
        answer:
          '{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"Chocolate brownie biscuit "},{"type":"text","marks":[{"type":"strong"}],"text":"cupcake fruitcake cookie"},{"type":"text","text":". Topping tart gingerbread candy jelly fruitcake pudding sesame snaps."}]}]}',
        feedback:
          '{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","marks":[{"type":"strong"}],"text":"Danish bear claw croissant marzipan"},{"type":"text","text":" chocolate bar. Lemon drops sweet roll icing danish caramels cake toffee."}]},{"type":"paragraph","content":[{"type":"text","text":"Candy canes cupcake "},{"type":"text","marks":[{"type":"strong"}],"text":"jujubes sweet roll"},{"type":"text","text":" macaroon marshmallow candy sweet macaroon."}]}]}'
      },
      {
        correct: false,
        answer:
          '{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"Dessert wafer "},{"type":"text","marks":[{"type":"strong"}],"text":"chocolate"},{"type":"text","text":" dragée donut lemon drops lollipop croissant."}]}]}',
        feedback:
          '{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"Jelly sugar plum sesame snaps "},{"type":"text","marks":[{"type":"strong"}],"text":"muffin cheesecake"},{"type":"text","text":" liquorice sweet roll. Pastry icing macaroon halvah croissant soufflé powder cupcake."}]},{"type":"paragraph","content":[{"type":"text","text":"Dessert cake ice cream caramels topping cheesecake brownie."}]}]}'
      }
    ]
  },
  {
    id: "2",
    accnum: "",
    reviewed: true,
    title: "Interpret Limits Shown Graphically",
    library: "AP Calculus",
    visibility: "Draft",
    type: "Multiple choice",
    xml: false,
    question:
      '{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"Barque pinnace schooner "},{"type":"text","marks":[{"type":"strong"}],"text":"wench"},{"type":"text","text":" Jolly Roger handsomely haul wind keelhaul Privateer Davy Jones Locker."}]}]}',
    answers: [
      {
        correct: true,
        answer:
          '{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"Jury mast clipper "},{"type":"text","marks":[{"type":"strong"}],"text":"warp gangplank"},{"type":"text","text":" carouser Jack Tar mizzen lugsail handsomely cutlass. Lookout spyglass pressgang black jack swab salmagundi aft stern lass heave to."}]}]}',
        feedback:
          '{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","marks":[{"type":"strong"}],"text":"Plunder lass swing the lead case"},{"type":"text","text":" shot ho snow blow the man down list barque quarter. Sink me brig cable Brethren of the Coast careen fire ship sheet reef sails bilge water carouser. Topgallant bilge rat fire ship jib heave to hail-shot jolly boat to go on account hands main sheet."}]}]}'
      },
      {
        correct: false,
        answer:
          '{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"Walk the "},{"type":"text","marks":[{"type":"strong"}],"text":"plank strike colors"},{"type":"text","text":" port spirits holystone schooner blow the man down Arr gangway man-of-war."}]}]}',
        feedback:
          '{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","marks":[{"type":"strong"}],"text":"Fire ship lanyard Davy Jones Locker brigantine"},{"type":"text","text":" case shot bilge rat topgallant Sea Legs fire in the hole crimp."}]},{"type":"paragraph","content":[{"type":"text","text":"Barbary Coast mizzen hands to go on account run a shot across "},{"type":"text","marks":[{"type":"strong"}],"text":"the bow lugsail matey keel carouser"},{"type":"text","text":" hail-shot."}]}]}'
      }
    ]
  },
  {
    id: "3",
    accnum: "",
    reviewed: true,
    title: "Predict Molecular Geometry of H3O+",
    library: "AP Chemistry",
    visibility: "Published",
    type: "Multiple choice",
    xml: false,
    question:
      '{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"Zombie ipsum reversus "},{"type":"text","marks":[{"type":"strong"}],"text":"ab viral inferno"},{"type":"text","text":", nam rick grimes malum cerebro."}]}]}',
    answers: [
      {
        correct: false,
        answer:
          '{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"De carne lumbering animata corpora quaeritis. Summus brains sit​​, "},{"type":"text","marks":[{"type":"strong"}],"text":"morbo vel maleficia?"},{"type":"text","text":" De apocalypsi gorger omero undead survivor dictum mauris."}]}]}',
        feedback:
          '{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","marks":[{"type":"em"}],"text":"Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium."}]}]}'
      },
      {
        correct: true,
        answer:
          '{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","marks":[{"type":"strong"}],"text":"Qui animated corpse"},{"type":"text","text":", cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus."}]}]}',
        feedback:
          '{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"Zonbi tattered for solum oculi eorum defunctis go lum cerebro. "},{"type":"text","marks":[{"type":"strong"}],"text":"Nescio brains an Undead zombies"},{"type":"text","text":". Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead."}]}]}'
      }
    ]
  }
];

const typeDefs = gql`
  type Answer {
    correct: Boolean!
    answer: String!
    feedback: String!
  }

  type Question {
    id: ID!
    accnum: String!
    reviewed: Boolean!
    title: String!
    library: String!
    visibility: String!
    type: String!
    xml: Boolean!
    question: String!
    answers: [Answer]!
  }

  input AnswerInput {
    correct: Boolean!
    answer: String!
    feedback: String!
  }

  input QuestionInput {
    id: ID!
    accnum: String!
    reviewed: Boolean!
    title: String!
    library: String!
    visibility: String!
    type: String!
    xml: Boolean!
    question: String!
    answers: [AnswerInput]!
  }

  type Query {
    questions: [Question]!
    question(id: ID!): Question
  }

  type Mutation {
    createQuestion(input: QuestionInput): Question
    updateQuestion(input: QuestionInput): Question
  }
`;

const resolvers = {
  Query: {
    questions: () => questions,
    question: id => questions.find(question => question.id === id)
  },
  Mutation: {
    createQuestion: (_, { input }, context) => {
      questions.push(input);
      return input;
    },
    updateQuestion: (_, { input }, context) => {
      questions = [
        ...questions.filter(question => question.id !== input.id),
        input
      ];
      return input;
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 8000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
