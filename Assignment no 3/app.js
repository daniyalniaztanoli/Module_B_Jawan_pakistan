let mobile_data = [
    {
        brand: "Samsung",
        model: "SamsungA30",
        price: "40000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb",
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE4_1aEWdkMwbedzb7SjD1SMUsCCIgEKivdA&usqp=CAU"

    },
    {
        brand: "Samsung",
        model: "SamsungA10",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom: "128gb",
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE4_1aEWdkMwbedzb7SjD1SMUsCCIgEKivdA&usqp=CAU"

    },
    {
        brand: "Samsung",
        model: "SamsungA20",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom: "128gb",
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE4_1aEWdkMwbedzb7SjD1SMUsCCIgEKivdA&usqp=CAU"

    },
    {
        brand: "Vivo",
        model: "VivoY20",
        price: "20000",
        camera: "40px",
        ram: "2gb",
        rom: "32gb",
        image_url: "https://static.vecteezy.com/system/resources/previews/020/927/198/original/vivo-brand-logo-phone-symbol-name-white-design-chinese-mobile-illustration-with-black-background-free-vector.jpg"

    },
    {
        brand: "Vivo",
        model: "VivoY11",
        price: "20000",
        camera: "40px",
        ram: "3gb",
        rom: "32gb",
        image_url: "https://static.vecteezy.com/system/resources/previews/020/927/198/original/vivo-brand-logo-phone-symbol-name-white-design-chinese-mobile-illustration-with-black-background-free-vector.jpg"

    },
    {
        brand: "Vivo",
        model: "VivoY15",
        price: "30000",
        camera: "40px",
        ram: "4gb",
        rom: "64gb",
        image_url: "https://static.vecteezy.com/system/resources/previews/020/927/198/original/vivo-brand-logo-phone-symbol-name-white-design-chinese-mobile-illustration-with-black-background-free-vector.jpg"

    },
    {
        brand: "Motorola",
        model: "Motorola123",
        price: "5000",
        camera: "2px",
        ram: "2gb",
        rom: "32gb",
        image_url:"https://i.pinimg.com/736x/6a/46/3e/6a463e2d57287b93a73622411596ec38.jpg"

    },
    {
        brand: "Motorola",
        model: "Motorola123",
        price: "5000",
        camera: "2px",
        ram: "2gb",
        rom: "32gb",
        image_url:"https://i.pinimg.com/736x/6a/46/3e/6a463e2d57287b93a73622411596ec38.jpg"

    },
    {
        brand: "Motorola",
        model: "Motorola123",
        price: "5000",
        camera: "2px",
        ram: "2gb",
        rom: "32gb",
        image_url:"https://i.pinimg.com/736x/6a/46/3e/6a463e2d57287b93a73622411596ec38.jpg"

    },
    {
        brand: "Iphone",
        model: "Iphone12",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb",
        image_url:"https://static.vecteezy.com/system/resources/previews/020/927/238/original/apple-brand-logo-phone-symbol-with-name-white-design-mobile-illustration-with-black-background-free-vector.jpg"

    },
    {
        brand: "Iphone",
        model: "Iphone13",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb",
        image_url:"https://static.vecteezy.com/system/resources/previews/020/927/238/original/apple-brand-logo-phone-symbol-with-name-white-design-mobile-illustration-with-black-background-free-vector.jpg"

    },
    {
        brand: "Iphone",
        model: "IphoneX",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb",
        image_url:"https://static.vecteezy.com/system/resources/previews/020/927/238/original/apple-brand-logo-phone-symbol-with-name-white-design-mobile-illustration-with-black-background-free-vector.jpg"

    },
]


const show_data = document.getElementById("show_data");

mobile_data.map((current_obj)=>{
    const {brand,price,camera,ram,rom,model,image_url} = current_obj;
    return(show_data.innerHTML +=
`<div class="col-12 col-sm-6 col-md-4 col-lg-3 pt-2">
<ul class="fw-bold p-3 text-center rounded shadow bg-white">
    <li><img src="${image_url}" class="rounded" width="200px" height="200px"></li>
    <li>Brand:${brand}</li>
    <li>Model:${model}</li>
    <li>Camera:${camera}</li>
    <li>Ram:${ram}</li>
    <li>Rom:${rom}</li>
    <li>Price:${price}</li>
    </ul> 
    </div>`)
})

// filter data and show
function search_btn() {
    const searchOption = document.getElementById("searchOption").value.toLowerCase();
    const searchInput = document.getElementById("searchInput").value.toLowerCase();

    const filteredData = mobile_data.filter((current_obj) => {
        const valueToSearch = current_obj[searchOption].toLowerCase();
        return valueToSearch.includes(searchInput);
    });

    const show_data = document.getElementById("show_data");
    show_data.innerHTML = "";

    // and show data on screen
    filteredData.map((current_obj) => {
        const { brand, price, camera, ram, rom, model, image_url } = current_obj;
        return (show_data.innerHTML +=
            `<div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <ul class="fw-bold p-3 text-center rounded shadow bg-white">
                    <li><img src="${image_url}" class="rounded" width="200px" height="200px"></li>
                    <li>Brand:${brand}</li>
                    <li>Model:${model}</li>
                    <li>Camera:${camera}</li>
                    <li>Ram:${ram}</li>
                    <li>Rom:${rom}</li>
                    <li>Price:${price}</li>
                </ul>
            </div>`);
    });
}