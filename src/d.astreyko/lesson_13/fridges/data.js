const ALL_ITEMS = [
  {
    id: 1,
    img: 'https://content2.onliner.by/catalog/device/header/9227018608d0548016e2adb9b5898b50.jpeg',
    title: 'Samsung RB33A3440WW/WT',
    brand: 'samsung',
    effective: 'A+',
    description: 'полный No Frost, электронное управление, класс A+, полезный объём: 328 л (230 + 98 л), инверторный компрессор, 59.5x67.5x185 см, белый',
    price: 1199.00
  },

  {
    id: 2,
    img: 'https://content2.onliner.by/catalog/device/header/f5cb92763409e3bf4abc287d941536a1.jpeg',
    title: 'Samsung F10SM-T6002F',
    brand: 'samsung',
    effective: 'A+',
    description: 'без No Frost, механическое управление, класс A+, полезный объём: 85 л, 56x60x85 см, белый',
    price: 667.94
  },

  {
    id: 3,
    img: 'https://content2.onliner.by/catalog/device/header/89e9dace0fadd13ecdb64f0192d0221b.jpeg',
    title: 'Samsung RB37A5470SA/WT',
    brand: 'samsung',
    effective: 'A+',
    description: 'полный No Frost, электронное управление, класс A+, полезный объём: 367 л (269 + 98 л), инверторный компрессор, зона свежести, 59.5x64.7x201 см, серебристый',
    price: 1499.00
  },

  {
    id: 4,
    img: 'https://content2.onliner.by/catalog/device/header/dfd51770969c43ae284da84ffb767852.jpeg',
    title: 'Bosch Serie 2 KGN39UW22R',
    brand: 'bosh',
    effective: 'A+',
    description: 'полный No Frost, электронное управление, класс A+, полезный объём: 388 л (280 + 108 л), 60x66x203 см, белый',
    price: 1279.00
  },

  {
    id: 5,
    img: 'https://content2.onliner.by/catalog/device/header/a202159faaabd82e1b578e375934d59c.jpeg',
    title: 'LG GA-B509PSAM',
    brand: 'lg',
    effective: 'A++',
    description: 'полный No Frost, электронное управление, класс A++, полезный объём: 384 л (277 + 107 л), инверторный компрессор, зона свежести, 59.5x68.2x203 см, нержавеющая сталь',
    price: 2250.00
  },

  {
    id: 6,
    img: 'https://content2.onliner.by/catalog/device/header/f2c480df19df352bbbe6f2d9d20e1fb0.jpeg',
    title: 'Liebherr IG 1024',
    brand: 'liebherr',
    effective: 'A++',
    description: 'без No Frost, электронное управление, класс A++, полезный объём: 73 л, 55.9x54.4x71.2 см, белый',
    price: 1975.00
  },

  {
    id: 7,
    img: 'https://content2.onliner.by/catalog/device/header/a92c6c9f854efa72fa942a7fb4386e81.jpeg',
    title: 'ATLANT ХМ 4208-000',
    brand: 'atlant',
    effective: 'A',
    description: 'без No Frost, механическое управление, класс A, полезный объём: 173 л (131 + 42 л), 54.5x60x142.5 см, белый',
    price: 638.00
  },

  {
    id: 8,
    img: 'https://content2.onliner.by/catalog/device/header/285228dffae228c6ebeb15ea717563b7.jpeg',
    title: 'Nord NR 403 W',
    brand: 'nord',
    effective: 'A+',
    description: 'без No Frost, механическое управление, класс A+, полезный объём: 104 л, 50x53x86 см, белый',
    price: 454.00
  },

  {
    id: 9,
    img: 'https://content2.onliner.by/catalog/device/header/a34153c6923537a5ecac8fa556f2f779.jpeg',
    title: 'ATLANT М 7401-100',
    brand: 'atlant',
    effective: 'A+',
    description: 'без No Frost, механическое управление, класс A+, полезный объём: 85 л, 55x58x85 см, белый',
    price: 628.98
  },

  {
    id: 10,
    img: 'https://content2.onliner.by/catalog/device/header/f55abf5ddfda1e32823685bdb217764c.jpeg',
    title: 'Nord NR 403 AW',
    brand: 'nord',
    effective: 'A+',
    description: 'без No Frost, механическое управление, класс A+, полезный объём: 104 л, 50x53x86 см, белый',
    price: 427.46
  },

  {
    id: 11,
    img: 'https://content2.onliner.by/catalog/device/header/ab6869f577196c77e77a10190a5b0241.jpeg',
    title: 'ATLANT МХМ 2835-90',
    brand: 'atlant',
    effective: 'A',
    description: 'без No Frost, механическое управление, класс A, полезный объём: 272 л (202 + 70 л), 60x63x163 см, белый',
    price: 664.01
  },

  {
    id: 12,
    img: 'https://content2.onliner.by/catalog/device/header/297749f10ad0d0bd55c70bacbc106894.jpeg',
    title: 'ATLANT МХ 2822-80',
    brand: 'atlant',
    effective: 'A',
    description: 'без No Frost, механическое управление, класс A, полезный объём: 205 л (175 + 30 л), 60x60x131 см, белый',
    price: 633.79
  },

  {
    id: 13,
    img: 'https://content2.onliner.by/catalog/device/header/831f7139624ae021dae236a16ffe4f7f.jpeg',
    title: 'Bosch Serie 6 VitaFresh Plus KGN39AW32R',
    effective: 'A++',
    brand: 'bosh',

    description: 'полный No Frost, электронное управление, класс A++, полезный объём: 388 л (280 + 108 л), инверторный компрессор, зона свежести, 60x66x203 см, белый',
    price: 1911.16
  },

  {
    id: 14,
    img: 'https://content2.onliner.by/catalog/device/header/5f0bde13b3a60bf57fbc5cafdd79b112.jpeg',
    title: 'Samsung RZ32M7110SA',
    brand: 'samsung',
    effective: 'A+',
    description: 'полный No Frost, электронное управление, полезный объём: 315 л, инверторный компрессор, 59.5x69.4x185.3 см, серебристый',
    price: 1919.64
  },

  {
    id: 15,
    img: 'https://content2.onliner.by/catalog/device/header/e5e98f7656d28097b2588d51d06460b2.jpeg',
    title: 'LG GA-B459SMQM',
    brand: 'lg',
    effective: 'A++',
    description: 'полный No Frost, электронное управление, класс A++, полезный объём: 341 л (234 + 107 л), инверторный компрессор, зона свежести, 59.5x68.2x186 см, серебристый',
    price: 1467.76
  },

  {
    id: 16,
    img: 'https://content2.onliner.by/catalog/device/header/92d5c6d28daa940e6dae12d674467fc5.jpeg',
    title: 'Liebherr GP 1213 Comfort',
    brand: 'liebherr',
    effective: 'A++',
    description: 'без No Frost, электронное управление, класс A++, полезный объём: 98 л, 55.3x62.4x85.1 см, белый',
    price: 789.00
  },

  {
    id: 17,
    img: 'https://content2.onliner.by/catalog/device/header/f0a71467a5d9fae1b9986f1e19666773.jpeg',
    title: 'Samsung RB30A32N0SA/WT',
    brand: 'samsung',
    effective: 'A+',
    description: 'полный No Frost, электронное управление, класс A+, полезный объём: 311 л (213 + 98 л), инверторный компрессор, 59.5x67.5x178 см, серебристый',
    price: 1095.00
  },

  {
    id: 18,
    img: 'https://content2.onliner.by/catalog/device/header/b6f579f3f2e81ad515c46c09d469f7e0.jpeg',
    title: 'ATLANT ХМ 4008-022',
    brand: 'atlant',
    effective: 'A',
    description: 'без No Frost, механическое управление, класс A, полезный объём: 226 л (163 + 63 л), 60x63x142 см, белый',
    price: 6859.80
  },

  {
    id: 19,
    img: 'https://content2.onliner.by/catalog/device/header/5175e6d9cb46376c9297809daa000d35.jpeg',
    title: 'ATLANT ХМ 4625-101',
    brand: 'atlant',
    effective: 'A+',
    description: 'без No Frost, электронное управление, класс A+, полезный объём: 364 л (205 + 159 л), зона свежести, 59.5x62.9x206.8 см, белый',
    price: 978.00
  },

  {
    id: 20,
    img: 'https://content2.onliner.by/catalog/device/header/c63c44ca96e16cb00e2927713246c611.jpeg',
    title: 'ATLANT ХМ 4307-000',
    brand: 'atlant',
    effective: 'A',
    description: 'без No Frost, механическое управление, класс A, полезный объём: 234 л (167 + 67 л), 54x56x178 см, белый',
    price: 860.00,
  }];

function getBrands() {
  const brands = ALL_ITEMS.map(fridge => fridge.brand);
  return [...new Set(brands)];
}

console.log(getBrands());
