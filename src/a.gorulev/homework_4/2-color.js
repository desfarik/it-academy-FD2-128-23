const colourAssociation = array => 
array.map(([colour, association]) => ({[colour]:association}));

colourAssociation([["white", "goodness"], ["blue", "tranquility"]]);

