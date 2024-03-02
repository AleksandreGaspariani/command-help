
const general = [
    'იმისათვის რომ დაქოქოთ ტრანსპორტი მიაჭირეთ „Z“ ღილაკს',
    'ავტომობილის ფარების ასანთებად მიაჭირეთ „H“ ღილაკს'
]

const vehicle = [
    'იმისათვის რომ დაქოქოთ ტრანსპორტი მიაჭირეთ „Z“ ღილაკს',
    'ავტომობილის ფარების ასანთებად მიაჭირეთ „H“ ღილაკს'
]

const house = [
    'სახლის საყიდლად გამოიყენეთ ბრძანება /buyhouse',
    'სახლში ინტერიორის განსათავსებლად გამოიყენეთ ბრძანება /housefurniture',
]

const company = [
    'ბიზნესის საყიდლად გამოიყენეთ ბრძანება /buybizz',
    'ბიზნესის შესვლის ტარიფის დასაყენებლად გამოიყენეთ ბრძანება /fee [ოდენობა]',
]

const faction = [
    'ფრაქციის OOC ჩატის გამოსაყენებლად გამოიყენეთ ბრძანება /f [ტექსტი]',
    'რაციის გამოსაყენებლად (თუ ფრაქცია გაძლევს ამის საშვალებას) გამოიყენეთ ბრძანება /r [ტექსტი]',
]

const job = [
    'სამუშაოს დასაწყებად დადექით ჩექფოინთზე და მიაჭირეთ ღილაკ „E“ -ს',
    'იმა და ამისათვინ გამოიყენეთ ბრძანება ესა და ეს რათა ნახოთ ამისა და ამის სტატისტიკა',
]

function appendUl() {
    $('#c_mainbar').empty().append(`
        <ul class='c_scroll mt-2 pt-5 px-5' style='list-style-type: decimal-leading-zero; z-index: 10' id='expand_ul'></ul>
    `);
}

function expandMain(params) {

    switch (params) {
        case 'general':
            appendUl();
            general.forEach(element => {
                $('#expand_ul').append(`
                    <li><small>`+element+`</small></li>
                `)
            });
            break;
        case 'vehicle':
            appendUl();
            vehicle.forEach(element => {
                $('#expand_ul').append(`
                    <li><small>`+element+`</small></li>
                `)
            });
            break;
        case 'house':
            appendUl();
            house.forEach(element => {
                $('#expand_ul').append(`
                    <li><small>`+element+`</small></li>
                `)
            });
            break;
        case 'company':
            appendUl();
            company.forEach(element => {
                $('#expand_ul').append(`
                    <li><small>`+element+`</small></li>
                `)
            });
            break;
        case 'faction':
            appendUl();
            faction.forEach(element => {
                $('#expand_ul').append(`
                    <li><small>`+element+`</small></li>
                `)
            });
            break;
        case 'job':
            appendUl();
            job.forEach(element => {
                $('#expand_ul').append(`
                    <li><small>`+element+`</small></li>
                `)
            });
            break;

        default:
            $('#c_mainbar').append(`
                <div style='height: 100%; width: 100%; background: url(https://w0.peakpx.com/wallpaper/806/329/HD-wallpaper-grand-theft-auto-grand-theft-auto-v.jpg); background-repeat: no-repeat; background-size: cover'>
                    <div class='d-flex flex-column justify-content-center text-white-50 align-items-center' style='height: 100%; width: 100%; background-color: rgba(0, 0, 0, 0.648)'> 
                        <span class="material-symbols-outlined" style='font-size: 4rem'>
                            support
                        </span>
                        <h1 class='display-2' style='font-family: "Kode Mono"'>LS:RP Help Centre</h1>
                    </div>
                </div>  
            `)
            break;
    }
}

function closeHelper() {
    $('body').empty();
}

expandMain();
