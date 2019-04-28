
export class SlothsService {
  private threeToedSloth = {
    title: "Three Toed Sloth",
    description: "The three-toed sloths are tree-living mammals from Latin America. They are the only members of the genus Bradypus and the family Bradypodidae. The four living species of three-toed sloths are the brown-throated sloth, the maned sloth, the pale-throated sloth, and the pygmy three-toed sloth. "
  };

  private twoToedSloth = {
    title: "Two Toed Sloth",
    description: "Choloepus is a genus of mammals of Central and South America, within the family Megalonychidae consisting of two-toed sloths.[2] The two species of Choloepus (which means \"lame foot\"[3]), Linnaeus's two-toed sloth (Choloepus didactylus) and Hoffmann's two-toed sloth (Choloepus hoffmanni), are the only surviving members of the family Megalonychidae. "
  };

  constructor() { }


  getSloths(type: string) {
    switch(type) {
      case 'two':
        return this.twoToedSloth;
      case 'three':
        return this.threeToedSloth;
    }
  }

}
