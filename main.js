var _ = require('lodash');

var mutationTableIndex = [
	{name: 'Body: Form', range: _.range(1, 201)},
	{name: 'Body: Function', range: _.range(201, 401)},
	{name: 'Mind: Behaviours', range: _.range(401, 501)},
	{name: 'Mind: Cognition', range: _.range(501, 601)},
	{name: 'Psychic Powers', range: _.range(601, 701)},
	{name: 'Supernatural Attributes', range: _.range(701, 1001)}	
];

var bodyForm = [
	{range: [1, 2], name: "Albino"},
	{range: [61, 62], name: "Feathers"},
	{range: [3], name: "Alternate Locomotion"},
	{range: [63], name: "Fin"},
	{range: [4], name: "Amorphous"},
	{range: [64], name: "Flaking Skin"},
	{range: [5], name: "Animal Feet"},
	{range: [65], name: "Flippers"},
	{range: [6, 7], name: "Antennae"},
	{range: [66, 67, 68, 69, 70], name: "Fur"},
	{range: [8, 9], name: "Anthropomorphic Animal"},
	{range: [71], name: "Fused Ribs"},
	{range: [10, 11, 12], name: "Armour"},
	{range: [72], name: "Gliding Membranes"},
	{range: [13], name: "Atrophied or Malformed Part"},
	{range: [73, 74], name: "Hairless"},
	{range: [14, 15, 16], name: "Attractive"},
	{range: [75], name: "Headless"},
	{range: [17], name: "Backwards Parts"},
	{range: [76], name: "Hemihypertrophy"},
	{range: [18], name: "Beak"},
	{range: [77], name: "Hooks"},
	{range: [19], name: "Bestial Face"},
	{range: [78], name: "Hopper"},
	{range: [20], name: "Birthmark"},
	{range: [79, 80, 81], name: "Horns"},
	{range: [21], name: "Body Barbs"},
	{range: [82], name: "Huge Beard"},
	{range: [22], name: "Boils and Sores"},
	{range: [83, 84], name: "Huge Head"},
	{range: [23], name: "Bristles"},
	{range: [85], name: "Hideous Appearance"},
	{range: [24], name: "Bulging Eyes"},
	{range: [86], name: "Hump"},
	{range: [25, 26], name: "Cat’s Eyes"},
	{range: [87], name: "Hunchback"},
	{range: [27], name: "Changing Colours"},
	{range: [88], name: "Internal Weapon"},
	{range: [28], name: "Cilia"},
	{range: [89, 90], name: "Large Ears"},
	{range: [29, 30, 31, 32], name: "Claws"},
	{range: [91], name: "Large Rear End"},
	{range: [33], name: "Clothes"},
	{range: [92, 93, 94, 95], name: "Large Size"},
	{range: [34, 35], name: "Clubfoot"},
	{range: [96], name: "Leaves"},
	{range: [36], name: "Complex Mouthparts"},
	{range: [97], name: "Limb Loss"},
	{range: [37], name: "Covered in Orifices"},
	{range: [98], name: "Limb Transference"},
	{range: [38, 39], name: "Crest"},
	{range: [99], name: "Long Face"},
	{range: [40], name: "Crown"},
	{range: [100], name: "Long Legs"},
	{range: [41], name: "Diffused Organs"},
	{range: [101], name: "Long Neck"},
	{range: [42], name: "Doppelgänger"},
	{range: [102], name: "Long Nose"},
	{range: [43], name: "Double Mouth"},
	{range: [103], name: "Long Tongue"},
	{range: [44, 45], name: "Enormously Fat"},
	{range: [104], name: "Loose Skin"},
	{range: [46, 47], name: "Exotic Genitalia"},
	{range: [105], name: "Mane"},
	{range: [48, 49], name: "Extra Eyes"},
	{range: [106], name: "Mostly Hairless"},
	{range: [50, 51], name: "Extra Fingers and Toes"},
	{range: [107], name: "Multiple Arms"},
	{range: [52], name: "Extra Joints"},
	{range: [108], name: "Multiple Heads"},
	{range: [53], name: "Extra Orifices"},
	{range: [109], name: "Multiple Legs"},
	{range: [54, 55], name: "Extremely Thin"},
	{range: [110], name: "No Ears"},
	{range: [56], name: "Eyestalks"},
	{range: [111], name: "No Eyes"},
	{range: [57, 58, 59, 60], name: "Fangs"},
	{range: [112], name: "No Nose"},
	{range: [113], name: "No Skin"},
	{range: [151], name: "Strange Interior Organs"},
	{range: [114, 115], name: "Oddly, Shaped Tongue"},
	{range: [152], name: "Strange Texture"},
	{range: [116], name: "One Eye"},
	{range: [153, 154, 155, 156], name: "Strangely-Coloured Eyes"},
	{range: [117], name: "Overgrown Body Part"},
	{range: [157, 158, 159, 160], name: "Strangely-Coloured Hair"},
	{range: [118, 119, 120, 121, 122], name: "Patterned Skin"},
	{range: [161, 162, 163, 164, 165], name: "Strangely-Coloured Skin"},
	{range: [123], name: "Physically Immature"},
	{range: [166], name: "Stubby Digits"},
	{range: [124], name: "Pinhead"},
	{range: [167], name: "Sympathetic Biomorphism"},
	{range: [125, 126], name: "Pointed Head"},
	{range: [168, 169, 170, 171, 172], name: "Tail"},
	{range: [127], name: "Pouch"},
	{range: [173], name: "Taller"},
	{range: [128], name: "Protective Eyelids"},
	{range: [174, 175], name: "Tentacles"},
	{range: [129], name: "Puny"},
	{range: [176], name: "Tongueless"},
	{range: [130], name: "Quills, Spines, or Thorns"},
	{range: [177], name: "Toothed Skin"},
	{range: [131], name: "Radula"},
	{range: [178, 179, 180], name: "Transparent Eyelids"},
	{range: [132], name: "Re-Arranged Face"},
	{range: [181], name: "Trunk"},
	{range: [133], name: "Redundant Vital Organs"},
	{range: [182, 183], name: "Tumours"},
	{range: [134, 135, 136], name: "Reverse Pedalism"},
	{range: [184], name: "Twisted Frame"},
	{range: [137, 138, 139], name: "Scales"},
	{range: [185], name: "Vestigial Wings"},
	{range: [140], name: "Scars"},
	{range: [186], name: "Walking Head"},
	{range: [141], name: "Short Legs"},
	{range: [187], name: "Warty Skin"},
	{range: [142], name: "Siamese Twin"},
	{range: [188], name: "Weapon Hands"},
	{range: [143], name: "Skull Face"},
	{range: [189, 190, 191], name: "Webbed Digits"},
	{range: [144, 145, 146, 147], name: "Small Size"},
	{range: [192, 193], name: "Whiskers"},
	{range: [148], name: "Snout"},
	{range: [194], name: "Wide"},
	{range: [149], name: "Stomach Orifice"},
	{range: [195, 196, 197, 198, 199], name: "Wings"},
	{range: [150], name: "Strange Ears"},
	{range: [200], name: "Wrinkled Skin"}
];

var bodyFunctions = [
	{range: [201, 202], name: "Adhesive Touch"},
	{range: [219], name: "Cocoon"},
	{range: [203, 204], name: "Allergies"},
	{range: [220, 221], name: "Cold Blooded"},
	{range: [205, 206], name: "Ambidextrous"},
	{range: [222, 223], name: "Colour Blind"},
	{range: [207], name: "Anaerobic"},
	{range: [224], name: "Cracking Joints"},
	{range: [208], name: "Aquatic Adaptation"},
	{range: [225], name: "Deaf"},
	{range: [209], name: "Bad Breath"},
	{range: [226, 227], name: "Decreased Metabolism"},
	{range: [210, 211, 212], name: "Bioluminescent"},
	{range: [228, 229, 230, 231, 232], name: "Decreased Physical Capability"},
	{range: [213], name: "Blind"},
	{range: [233], name: "Defensive Barbs"},
	{range: [214], name: "Blood Substitution"},
	{range: [234], name: "Diabetes"},
	{range: [215], name: "Buoyancy"},
	{range: [235], name: "Disease Carrier"},
	{range: [216, 217], name: "Chameleoline Skin"},
	{range: [236, 237], name: "Double Jointed"},
	{range: [218], name: "Chronic Pain"},
	{range: [238, 239], name: "Early Maturation"},
	{range: [240], name: "Efficient Digestion"},
	{range: [295], name: "Ink"},
	{range: [241, 242], name: "Electrical Generation"},
	{range: [296], name: "Kidney Stones"},
	{range: [243, 244], name: "Electromagnetic Disruption"},
	{range: [297], name: "Light Dependency"},
	{range: [245], name: "Enhanced Musculature"},
	{range: [298], name: "Light Generation"},
	{range: [246, 247], name: "Enlarging Mouth"},
	{range: [299], name: "Light Sensitivity"},
	{range: [248], name: "Excretion"},
	{range: [300], name: "Long Life"},
	{range: [249], name: "Explosive Death"},
	{range: [301, 302], name: "Low Pain Threshold"},
	{range: [250], name: "Extensible Limbs"},
	{range: [303], name: "Low Sex Drive"},
	{range: [251], name: "Fast Hair Growth"},
	{range: [304, 305], name: "Malformed Mouth"},
	{range: [252], name: "Fragrant"},
	{range: [306], name: "Malleable Body"},
	{range: [253], name: "Frog Tongue"},
	{range: [307], name: "Malleable Features"},
	{range: [254], name: "Fruit"},
	{range: [308], name: "Microscopic Vision"},
	{range: [255], name: "G, Tolerance"},
	{range: [309], name: "Mute"},
	{range: [256], name: "Gas Bag"},
	{range: [310], name: "Myopia"},
	{range: [257], name: "Gas Emission"},
	{range: [311], name: "Nerve Cut, Off"},
	{range: [258, 259], name: "Gills and Lungs"},
	{range: [312], name: "No Pain Receptors"},
	{range: [260], name: "Hangover Resistance"},
	{range: [313], name: "No Sense of Smell or Taste"},
	{range: [261, 262], name: "Heightened Hearing"},
	{range: [314], name: "No Sense of Touch"},
	{range: [263, 264], name: "Heightened Sense of Smell and Taste"},
	{range: [315], name: "Oversexed"},
	{range: [265, 266], name: "Heightened Sense of Touch"},
	{range: [316], name: "Paraplegic"},
	{range: [267, 268], name: "Hemophilia"},
	{range: [317, 318], name: "Parasite Infestation"},
	{range: [269], name: "Hermaphrodite"},
	{range: [319], name: "Parthenogenesis"},
	{range: [270], name: "Hermaphromorph"},
	{range: [320], name: "Performance Enhancement"},
	{range: [271], name: "High Body Temperature"},
	{range: [321], name: "Permeable Skin"},
	{range: [272, 273], name: "High Pain Threshold"},
	{range: [322, 323, 324], name: "Pheromones"},
	{range: [274], name: "Hollow Bones"},
	{range: [325], name: "Photosynthetic"},
	{range: [275], name: "Horrible Stench"},
	{range: [326], name: "Poison Glands"},
	{range: [276], name: "Hyperadrenal Gland"},
	{range: [327], name: "Poison Susceptibility"},
	{range: [277], name: "Hyperopia"},
	{range: [328, 329], name: "Poor Respiration"},
	{range: [278], name: "Immune to Disease"},
	{range: [330], name: "Pouched Cheeks"},
	{range: [279], name: "Immune to Poison"},
	{range: [331], name: "Powerful Jaws"},
	{range: [280], name: "Increased Appendix Size"},
	{range: [332], name: "Powerful Legs"},
	{range: [281], name: "Increased Heart and Lung Size"},
	{range: [333, 334], name: "Prehensile Feet"},
	{range: [282, 283], name: "Increased Metabolism"},
	{range: [335], name: "Prehensile Hair"},
	{range: [284, 285, 286, 287, 288], name: "Increased Physical Capability"},
	{range: [336, 337], name: "Premature Aging"},
	{range: [289], name: "Increased Susceptibility to Illness"},
	{range: [338], name: "Prey Scent"},
	{range: [290], name: "Independently Focusable Eyes"},
	{range: [339], name: "Protected Senses"},
	{range: [291], name: "Infected"},
	{range: [340], name: "Pseudopods"},
	{range: [292], name: "Infertile"},
	{range: [341], name: "Quadriplegic"},
	{range: [293], name: "Inflation"},
	{range: [342], name: "Radar"},
	{range: [294], name: "Infravision"},
	{range: [343], name: "Reflective Skin"},
	{range: [344, 345, 346], name: "Regeneration"},
	{range: [373], name: "Structural Weakness"},
	{range: [347], name: "Respiratory Filters"},
	{range: [374], name: "Suckers"},
	{range: [348], name: "Roots and Vines"},
	{range: [375, 376], name: "Telescopic Vision"},
	{range: [349], name: "Rotating Body Part"},
	{range: [377, 378], name: "Temperature Resistance"},
	{range: [350], name: "Rotting Flesh"},
	{range: [379, 380], name: "Temperature Sensitivity"},
	{range: [351], name: "Rubber Bones"},
	{range: [381], name: "Thin Skin"},
	{range: [352], name: "Rubbery Skin"},
	{range: [382], name: "Total Healing"},
	{range: [353], name: "Saliva Substitution"},
	{range: [383], name: "Toxic"},
	{range: [354], name: "Salt Drinker"},
	{range: [384], name: "Toxin Resistance"},
	{range: [355], name: "Sanitized Metabolism"},
	{range: [385], name: "Trail of Slime"},
	{range: [356], name: "Shapechanger"},
	{range: [386], name: "Tremor Sense"},
	{range: [357], name: "Shedding"},
	{range: [387], name: "Tunnel Vision"},
	{range: [358], name: "Short Life"},
	{range: [388], name: "Ultravision"},
	{range: [359, 360], name: "Silent Movement"},
	{range: [389], name: "Uncontrollable Flatulence"},
	{range: [361], name: "Silk Production"},
	{range: [390, 391], name: "Venomous Bite"},
	{range: [362, 363], name: "Slow Healer"},
	{range: [392], name: "Ventriloquist"},
	{range: [364, 365], name: "Sonar"},
	{range: [393], name: "Vents"},
	{range: [366], name: "Sonic Blast"},
	{range: [394], name: "Voluminous Lungs"},
	{range: [367], name: "Sound Mimicry"},
	{range: [395], name: "Vomits at Will"},
	{range: [368], name: "Spinning"},
	{range: [396], name: "Water Dependency"},
	{range: [369], name: "Spore Cloud"},
	{range: [397], name: "Water, Soluble Skin"},
	{range: [370], name: "Sprint"},
	{range: [398], name: "Weak Spot"},
	{range: [371], name: "Stiff Joints"},
	{range: [399], name: "Wet Skin"},
	{range: [372], name: "Strong Skeleton"},
	{range: [400], name: "Wounding Genitals"}
];

var mindBehaviours = [
	{range: [401], name: "Addicted"},
	{range: [416], name: "Controlled by Stars"},
	{range: [402, 403], name: "Addictive Personality"},
	{range: [417], name: "Daylight Stasis"},
	{range: [404], name: "Always Afraid"},
	{range: [418], name: "Deep Sleeper"},
	{range: [405], name: "Anxious"},
	{range: [419], name: "Degenerate Gambler"},
	{range: [406], name: "Berserker"},
	{range: [420], name: "Dependency"},
	{range: [407], name: "Blood Rage"},
	{range: [421, 422], name: "Depression"},
	{range: [408], name: "Breakdowns"},
	{range: [423], name: "Drone"},
	{range: [409], name: "Burrower"},
	{range: [424], name: "Drone Producer"},
	{range: [410, 411], name: "Carnivore"},
	{range: [425, 426], name: "Eating Disorder"},
	{range: [412], name: "Code of Honour"},
	{range: [427], name: "Egg Layer"},
	{range: [413], name: "Compulsive Behaviour"},
	{range: [428], name: "Excessive Sleeper"},
	{range: [414], name: "Compulsive Liar"},
	{range: [429], name: "External Digestion"},
	{range: [415], name: "Contrarian"},
	{range: [430], name: "Faith"},
	{range: [431], name: "Fear of Sacred Objects"},
	{range: [466, 467], name: "Omnivore"},
	{range: [432], name: "Fits and Seizures"},
	{range: [468], name: "Outbursts"},
	{range: [433], name: "Glossolalia"},
	{range: [469], name: "Pacifist"},
	{range: [434], name: "Hallucinations"},
	{range: [470], name: "Paranoia"},
	{range: [435, 436], name: "Headaches"},
	{range: [471], name: "Periodic Amnesia"},
	{range: [437, 438], name: "Herbivore"},
	{range: [472, 473, 474], name: "Phobia"},
	{range: [439], name: "Hibernating"},
	{range: [475], name: "Physical Coward"},
	{range: [440, 441], name: "Highly Social"},
	{range: [476], name: "Pyromania"},
	{range: [442], name: "Hoarder"},
	{range: [477, 478], name: "Restricted Diet"},
	{range: [443], name: "Honest"},
	{range: [479], name: "Sadism"},
	{range: [444, 445], name: "Hunting Instinct"},
	{range: [480], name: "Schizophrenia"},
	{range: [446], name: "Hypochondria"},
	{range: [481], name: "Sexual Fetish"},
	{range: [447], name: "Hysterical Injury"},
	{range: [482], name: "Sexual Neurosis"},
	{range: [448], name: "Irrational Hatred"},
	{range: [483], name: "Sexual Prowess"},
	{range: [449], name: "Kleptomania"},
	{range: [484], name: "Short Fuse"},
	{range: [450], name: "Largesse"},
	{range: [485], name: "Shuddering"},
	{range: [451, 452], name: "Manic"},
	{range: [486], name: "Shy"},
	{range: [453, 454], name: "Manic Depressive"},
	{range: [487], name: "Silly Voice"},
	{range: [455], name: "Masochism"},
	{range: [488], name: "Silly Walk"},
	{range: [456], name: "Mental Block"},
	{range: [489], name: "Sleepwalking"},
	{range: [457], name: "Migratory"},
	{range: [490, 491], name: "Slovenly"},
	{range: [458], name: "Motherliness"},
	{range: [492], name: "Sociopathic"},
	{range: [459], name: "Multi, Stage Lifespan"},
	{range: [493], name: "Strange Sound"},
	{range: [460], name: "Multiple Personalities"},
	{range: [494], name: "Stuttering"},
	{range: [461], name: "Narcolepsy"},
	{range: [495, 496], name: "Territorial"},
	{range: [462], name: "Nightmares"},
	{range: [497, 498], name: "Tidy"},
	{range: [463, 464], name: "Nocturnal"},
	{range: [499], name: "Transgendered"},
	{range: [465], name: "Obsessive"},
	{range: [500], name: "Vengeful"}
];

var mindCognition = [
	{range: [501, 502], name: "Animal Friendship"},
	{range: [526], name: "Dual Attention"},
	{range: [503], name: "Anticipation"},
	{range: [527, 528], name: "Dual Brain"},
	{range: [504, 505, 506, 507, 508], name: "Attention Deficit Disorder"},
	{range: [529, 530, 531, 532, 533], name: "Dyslexia"},
	{range: [509], name: "Autobiographical Memory"},
	{range: [534, 535], name: "Earthquake Prediction"},
	{range: [510, 511, 512], name: "Body Sense"},
	{range: [536], name: "Editorial Evaluation"},
	{range: [513], name: "Computer Brain"},
	{range: [537], name: "Eidetic Memory"},
	{range: [514, 515], name: "Cultural Flexibility"},
	{range: [538, 539, 540], name: "Emotionless"},
	{range: [516, 517, 518, 519, 520], name: "Decreased Mental Capability"},
	{range: [541], name: "Enhance Mutations"},
	{range: [521, 522, 523, 524], name: "Directional Sense"},
	{range: [542, 543], name: "Enhanced Nervous System"},
	{range: [525], name: "Dreamless"},
	{range: [544, 545, 546, 547, 548], name: "Enhanced Senses"},
	{range: [549], name: "Genetic Memory"},
	{range: [577], name: "No Visual Memory"},
	{range: [550, 551], name: "Heightened Olfactory Memory"},
	{range: [578, 579, 580], name: "Quick Learner"},
	{range: [552], name: "Hive Mind"},
	{range: [581, 582], name: "Radio Communication"},
	{range: [553, 554, 555], name: "Increased Brain Size"},
	{range: [583], name: "Romantic Rapport"},
	{range: [556, 557, 558, 559, 560], name: "Increased Mental Capability"},
	{range: [584, 585], name: "Sense Interference"},
	{range: [561, 562, 563, 564], name: "Insomnia"},
	{range: [586, 587], name: "Social Perception"},
	{range: [565], name: "Intuition"},
	{range: [588], name: "Socially Inept"},
	{range: [566, 567, 568], name: "Linguistic Aptitude"},
	{range: [589, 590, 591], name: "Spatial Perception"},
	{range: [569, 570], name: "Linguistic Mimic"},
	{range: [592, 593], name: "Speed Reader"},
	{range: [571], name: "Lucid Dreaming"},
	{range: [594, 595], name: "Time Sense"},
	{range: [572, 573], name: "Mechanical Intuition"},
	{range: [596], name: "Transfer Memories"},
	{range: [574], name: "Mindless"},
	{range: [575, 576], name: "Natural Leader"},
	{range: [597, 598, 599, 600], name: "Weather Sense"}
];

var psychicPowers = [
	{range: [601], name: "Animal Control"},
	{range: [638, 639], name: "Healing"},
	{range: [602], name: "Anti, Charisma"},
	{range: [640], name: "Heat Drain"},
	{range: [603], name: "Attack Reversal"},
	{range: [641], name: "Hostility Field"},
	{range: [604, 605], name: "Aura Reading"},
	{range: [642, 643, 644], name: "Hypnotic"},
	{range: [606], name: "Block Senses"},
	{range: [645], name: "Illusionist"},
	{range: [607, 608], name: "Cause Fear"},
	{range: [646], name: "Illusory Surroundings"},
	{range: [609], name: "Cause Insanity"},
	{range: [647], name: "Implant Memories"},
	{range: [610, 611], name: "Cause Pain"},
	{range: [648], name: "Inhibiting Field"},
	{range: [612, 613], name: "Charm"},
	{range: [649, 650], name: "Levitation"},
	{range: [614, 615], name: "Clairaudience"},
	{range: [651], name: "Life Leech"},
	{range: [616, 617, 618], name: "Clairvoyance"},
	{range: [652], name: "Light Manipulation"},
	{range: [619], name: "Commanding Voice"},
	{range: [653], name: "Magnetic Control"},
	{range: [620, 621], name: "Confuse"},
	{range: [654, 655], name: "Mass Mind"},
	{range: [622], name: "Create Emotions"},
	{range: [656, 657], name: "Mental Blast"},
	{range: [623], name: "Cryokinesis"},
	{range: [658, 659], name: "Mental Suggestion"},
	{range: [624], name: "Death Field Generation"},
	{range: [660], name: "Mind Attack"},
	{range: [625], name: "Ectoplasmic Hands"},
	{range: [661, 662, 663], name: "Pain Broadcast"},
	{range: [626, 627, 628], name: "Emotional Projection"},
	{range: [664], name: "Precognition"},
	{range: [629], name: "Enter Mind"},
	{range: [665, 666], name: "Psychic Broadcast"},
	{range: [630], name: "Erase Memories"},
	{range: [667, 668], name: "Psychic Cultural Adaptation"},
	{range: [631], name: "Familiarity"},
	{range: [669, 670, 671], name: "Psychic Detection"},
	{range: [632], name: "Fire in the Head"},
	{range: [672, 673, 674], name: "Psychic Empathy"},
	{range: [633, 634, 635], name: "Firewalker"},
	{range: [675], name: "Psychic Invisibility"},
	{range: [636, 637], name: "Heal Brain"},
	{range: [676], name: "Psychic Mirror"},
	{range: [677, 678, 679], name: "Psychic Vampire"},
	{range: [688], name: "Symbiotic Control"},
	{range: [680, 681], name: "Psychoanalyze"},
	{range: [689, 690, 691], name: "Telekinesis"},
	{range: [682], name: "Psychometry"},
	{range: [692], name: "Telekinetic Flight"},
	{range: [683], name: "Send Dreams"},
	{range: [693, 694, 695, 696], name: "Telepathy"},
	{range: [684, 685], name: "Sixth Sense"},
	{range: [697], name: "Teleport"},
	{range: [686], name: "Stunning Blast"},
	{range: [698], name: "Teleport Object"},
	{range: [687], name: "Summon"},
	{range: [699, 700], name: "Time Distortion"}
];

var supernaturalAttributes = [
	{range: [701], name: "Ability Transfer"},
	{range: [745], name: "Charred Body"},
	{range: [702, 703], name: "Absorb Inanimate Properties"},
	{range: [746], name: "Compulsive Counting"},
	{range: [704, 705], name: "Absorb Mental Properties"},
	{range: [747], name: "Computer Link"},
	{range: [706], name: "Addictive Smoke"},
	{range: [748, 749], name: "Conjuration"},
	{range: [707], name: "Air Swimmer"},
	{range: [750], name: "Control Clocks"},
	{range: [708], name: "Alteration Ray"},
	{range: [751], name: "Control Crowds"},
	{range: [709, 710], name: "Alternate Inorganic Form"},
	{range: [752, 753, 754], name: "Control Earth"},
	{range: [711, 712, 713], name: "Animal Shapechange"},
	{range: [755, 756, 757], name: "Control Light"},
	{range: [714, 715], name: "Animate Objects"},
	{range: [758, 759, 760], name: "Control Liquid"},
	{range: [716], name: "Animated Skin"},
	{range: [761, 762], name: "Control Machines"},
	{range: [717, 718], name: "Animated Tattoos"},
	{range: [763, 764, 765], name: "Control Plants"},
	{range: [719], name: "Arcane Knowledge"},
	{range: [766], name: "Control Reputation"},
	{range: [720], name: "Arcane Tracking"},
	{range: [767], name: "Corpse Psychometry"},
	{range: [721, 722], name: "Armoured Skin"},
	{range: [768], name: "Cosmic Awareness"},
	{range: [723], name: "Astral Projection"},
	{range: [769], name: "Create Darkness"},
	{range: [724], name: "Aura of Disgust"},
	{range: [770, 771], name: "Create Gas"},
	{range: [725, 726], name: "Aura of Fear"},
	{range: [772, 773, 774, 775], name: "Crossbreed"},
	{range: [727, 728], name: "Aura of Light"},
	{range: [775], name: "Crystalline Body"},
	{range: [729], name: "Become Two, Dimensional"},
	{range: [776], name: "Danger Teleport"},
	{range: [730, 731, 732], name: "Bend Light"},
	{range: [777], name: "Darksight"},
	{range: [733], name: "Bio, Tech Assimilation"},
	{range: [778], name: "Demonic Appearance"},
	{range: [734], name: "Blurry"},
	{range: [779, 780, 781], name: "Demonic Phenomena"},
	{range: [735], name: "Book"},
	{range: [782], name: "Demonologist"},
	{range: [736], name: "Book, Viewing"},
	{range: [783], name: "Density Control"},
	{range: [737], name: "Brain Washer"},
	{range: [784], name: "Devolver"},
	{range: [738, 739, 740], name: "Breath Weapon"},
	{range: [785], name: "Dimensional/Temporal Instability"},
	{range: [741], name: "Burning Body"},
	{range: [786, 787], name: "Dissent Parasite"},
	{range: [742], name: "Burning Inside"},
	{range: [788], name: "Divine Avatar"},
	{range: [743], name: "Cannot Cross Running Water"},
	{range: [789], name: "Divisional Body Segments"},
	{range: [744], name: "Cause Sleep"},
	{range: [790], name: "Duplication"},
	{range: [791, 792], name: "Eat Anything"},
	{range: [847], name: "Infinite Endurance"},
	{range: [793], name: "Elasticity"},
	{range: [848, 849], name: "Inspiring Aura"},
	{range: [794], name: "Electrical Travel"},
	{range: [850, 851], name: "Intangibility"},
	{range: [795], name: "Elemental Body"},
	{range: [852], name: "Invincible Buddha"},
	{range: [796], name: "Energy Absorption"},
	{range: [853, 854, 855], name: "Invisibility"},
	{range: [797, 798, 799], name: "Energy Blast"},
	{range: [856], name: "Invulnerable"},
	{range: [800, 801], name: "Energy Negation Field"},
	{range: [857, 858], name: "Invulnerable to Weapons"},
	{range: [802], name: "Energy Redirection"},
	{range: [859], name: "Iron Teeth and Nails"},
	{range: [803], name: "Energy Sensitivity"},
	{range: [860], name: "Kinetic Absorption"},
	{range: [804], name: "Entropic Precision"},
	{range: [861, 862], name: "Liquid Form"},
	{range: [805, 806, 807], name: "Ethereal Projection"},
	{range: [863, 864], name: "Magic Resistance"},
	{range: [808], name: "Evil Eye"},
	{range: [865], name: "Magical Affinity"},
	{range: [809], name: "Exorcist"},
	{range: [866], name: "Magnetic"},
	{range: [810], name: "Explode Objects"},
	{range: [867], name: "Manikin"},
	{range: [811], name: "Eye Scrying"},
	{range: [868], name: "Manipulate Gravity"},
	{range: [812], name: "Face of a Demon"},
	{range: [869], name: "Material Transparency"},
	{range: [813], name: "Face of a Demon, God"},
	{range: [870, 871], name: "Mechanoid"},
	{range: [814], name: "False Body"},
	{range: [872], name: "Mercreature"},
	{range: [815], name: "Featureless Face"},
	{range: [873], name: "Metal Skin"},
	{range: [816], name: "Flaming Skull Face"},
	{range: [874], name: "Mind Cannibal"},
	{range: [817], name: "Flammable Skin"},
	{range: [875], name: "Molecular Disruption"},
	{range: [818], name: "Fleshcrafter"},
	{range: [876], name: "Molecular Sense"},
	{range: [819, 820, 821], name: "Force Field"},
	{range: [877], name: "Multiplication"},
	{range: [822], name: "Fortune Teller"},
	{range: [878, 879], name: "Mutant Detection"},
	{range: [823], name: "Freezing Body"},
	{range: [880, 881], name: "Mystical Third Eye"},
	{range: [824], name: "Gaseous Form"},
	{range: [882], name: "Nightmare Portal"},
	{range: [825], name: "Ghost Talker"},
	{range: [883, 884], name: "No Reflection"},
	{range: [826], name: "Glittering"},
	{range: [885, 886], name: "No Shadow"},
	{range: [827], name: "Glow"},
	{range: [887], name: "Object Bound"},
	{range: [828], name: "Halo"},
	{range: [888], name: "Object Mimic"},
	{range: [829, 830], name: "Heal Others"},
	{range: [889, 890], name: "Patronage"},
	{range: [831], name: "Historical Viewing"},
	{range: [891], name: "Perfect Regeneration"},
	{range: [832], name: "Homunculus"},
	{range: [892, 893], name: "Petrifying Gaze"},
	{range: [833, 834], name: "Illusion Generation"},
	{range: [894], name: "Physical Mimic"},
	{range: [835], name: "Illusory Features"},
	{range: [895], name: "Planar Travel"},
	{range: [836, 837], name: "Immortal"},
	{range: [896], name: "Possession"},
	{range: [838, 839], name: "Immune to Cold"},
	{range: [897], name: "Power Duplication"},
	{range: [840, 841], name: "Immune to Energy"},
	{range: [898, 899], name: "Power Source"},
	{range: [842, 843], name: "Immune to Heat"},
	{range: [900], name: "Power Theft"},
	{range: [844, 845], name: "Immune to Illusions"},
	{range: [901, 902, 903], name: "Pyrokinesis"},
	{range: [846], name: "Incorporated Objects"},
	{range: [904, 905], name: "Radioactive"},
	{range: [906], name: "Removable Eyes"},
	{range: [957], name: "Susceptible to Possession"},
	{range: [907, 908], name: "Repulsed by Food"},
	{range: [958], name: "Symbol Bondage"},
	{range: [909], name: "Sacred Aura"},
	{range: [959, 960], name: "Taboo"},
	{range: [910, 911], name: "Saturated with Magical Energy"},
	{range: [961, 962], name: "Telepathic Communication"},
	{range: [912], name: "Secret Communication"},
	{range: [963, 964], name: "Telltale"},
	{range: [913], name: "Seep"},
	{range: [965], name: "Tomb Bondage"},
	{range: [914, 915], name: "Sense Evil"},
	{range: [966], name: "Total Chameleon"},
	{range: [916, 917, 918], name: "Sense Fear"},
	{range: [967, 968], name: "Totem Animal"},
	{range: [919, 920], name: "Sense Good"},
	{range: [969], name: "Trackless"},
	{range: [921, 922, 923], name: "Sense Lies"},
	{range: [970], name: "Transform Material"},
	{range: [924, 925], name: "Sensitive to Metal"},
	{range: [971, 972], name: "Transformation"},
	{range: [926, 927], name: "Sensitive to Sunlight"},
	{range: [973], name: "Translucent"},
	{range: [928], name: "Shadow Walk"},
	{range: [974], name: "Transmute Matter"},
	{range: [929], name: "Skinwalker"},
	{range: [975], name: "Transparent Flesh"},
	{range: [930], name: "Speak with Animals"},
	{range: [976], name: "Tunnelling"},
	{range: [931], name: "Spell Ability"},
	{range: [977], name: "Unbound"},
	{range: [932], name: "Spirit Enmity"},
	{range: [978, 979], name: "Undead"},
	{range: [933, 934], name: "Spirit Medium"},
	{range: [980], name: "Unwilling Medium"},
	{range: [935, 936], name: "Stable Balance"},
	{range: [981, 982, 983], name: "Vampiric"},
	{range: [937], name: "Stigmata"},
	{range: [984, 985], name: "Walk on Water"},
	{range: [938, 939, 940], name: "Superhuman Charisma"},
	{range: [986], name: "War Sense"},
	{range: [941, 942, 943], name: "Superhuman Intellect"},
	{range: [987, 988, 989, 990, 991], name: "Weakness"},
	{range: [944], name: "Superhuman Perception"},
	{range: [992, 993], name: "Weather Manipulation"},
	{range: [945, 946, 947], name: "Superhuman Reflexes"},
	{range: [994, 995, 996, 997], name: "Werecreature"},
	{range: [948, 949, 950], name: "Superhuman Speed"},
	{range: [998], name: "X, Ray Vision"},
	{range: [951, 952, 953], name: "Superhuman Strength"},
	{range: [999], name: "Zombie Master"},
	{range: [954, 955, 956], name: "Superhuman Toughness"},
	{range: [1000], name: "Zone of Silence"}
];

var test = [
	{name: 'Wild', range: _.range(1, 101), subtable: mutationTableIndex},
	{name: 'Boring', range: _.range(101, 201)}
];

//randomly chooses from a table, taking an optional lower limit value other than 1
function pick(table, lowerLimit) {
	var selection = '';
	var lastRange = _.last(table);
	var firstRange = _.first(table);
	var ceiling = _.last(lastRange.range);
	var floor = _.first(firstRange.range);;

	//option to set a floor other than 1
	if (typeof lowerLimit !== 'undefined') {
		floor = lowerLimit;
	}

	var random = _.random(floor, ceiling);
	console.log(random);

	//iterate through table object and checking random number in each range array, returning the key if true
	_.forEach(table, function(data) {
		var start = _.first(data.range);
		var end = _.last(data.range) + 1;
		var bool = _.inRange(random, start, end);

		if (bool == true) {
			selection = data.name;

			if (data.subtable !== undefined) {				
				selection = pick(data.subtable);
			}			
		}		
	});

	return selection;
}

console.log(pick(bodyForm));

