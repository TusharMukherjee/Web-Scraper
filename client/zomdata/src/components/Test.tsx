import React from 'react'

const Test = () => {
    let mapp = new Map();

    const objsize = JSON.parse(localStorage.getItem('gurugram') as any).length;
    const myarr = JSON.parse(localStorage.getItem('gurugram') as any);

    let temp = myarr.map((el: any) => el.categories.map((la: any) => la.trim()));

    for (var n of cuisine) {
        let value = 0;
        for (let i = 0; i < objsize; i++) {
            if (temp[i].includes(n)) {
                mapp.set(n, ++value);
            }
        }
    }

    // Promise.all(
    mapp = new Map([...mapp.entries()].sort((a, b) => b[1] - a[1]))
    // )
    // .then(
    // () => {
    for (var [key, val] of mapp) {
        console.log(key, val);
    }
    // }
    // );

    return (
        <div>Test</div>
    )
}

const cuisine = [
    "Afghan",
    "African",
    "American",
    "Andhra",
    "Arabian",
    "Asian",
    "Delight Goodies",
    "Awadhi",
    "BBQ",
    "Bakery",
    "Bangladeshi",
    "Belgian",
    "Bengali",
    "Bihari",
    "Biryani",
    "Bubble Tea",
    "Burger",
    "Burmese",
    "Cantonese",
    "Charcoal Chicken",
    "Chettinad",
    "Chinese",
    "Coffee",
    "Continental",
    "Desserts",
    "Egyptian",
    "European",
    "Fast Food",
    "Finger Food",
    "French",
    "Frozen Yogurt",
    "Goan",
    "Gujarati",
    "Healthy Food",
    "Hot dogs",
    "Hyderabadi",
    "Ice Cream",
    "Indonesian",
    "Iranian",
    "Irish",
    "Italian",
    "Japanese",
    "Juices",
    "Kashmiri",
    "Kathiyawadi",
    "Kebab",
    "Kerala",
    "Konkan",
    "Korean",
    "Lebanese",
    "Lucknowi",
    "Maharashtrian",
    "Malaysian",
    "Mandi",
    "Mangalorean",
    "Mediterranean",
    "Mexican",
    "Middle Eastern",
    "Mishti",
    "Mithai",
    "Modern Indian",
    "Momos",
    "Mughlai",
    "Naga",
    "Nepalese",
    "North Eastern",
    "North Indian",
    "Oriental",
    "Paan",
    "Pakistani",
    "Pancake",
    "Panini",
    "Retail Products",
    "Parsi",
    "Pasta",
    "Pizza",
    "Rajasthani",
    "Roast Chicken",
    "Rolls",
    "Salad",
    "Sandwich",
    "Seafood",
    "Shake",
    "Shawarma",
    "Sichuan",
    "Singaporean",
    "South American",
    "South Indian",
    "Spanish",
    "Sri Lankan",
    "Steak",
    "Sushi",
    "Tamil",
    "Tea",
    "Tex-Mex",
    "Thai",
    "Tibetan",
    "Turkish",
    "Vietnamese",
    "Waffle",
    "Wraps"
];

export default Test