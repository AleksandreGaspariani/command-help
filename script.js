
const general = [
    '🟦 /describe - To describe your character',
    '🟦 /examine - To check character description',
    '🟦 /walkingstyle - To change walking style',
    '🟦 /searchanim [character(s)] - Check animations which contains current character(s)',
    '🟦 To use animations you have to type before the name of animation dot symbol - `.` (example: .mechanic .mechanic2)',
    '🟦 For using animation interface press on button `U`',
    '🟦 /sa - To stop your current animation',
    '🟦 For accessing to your inventory/settings/statistics press on button `i`',
    '🟦 For editing some of the keybinds you have to go in settings by pressing on `i` and change keybinds.',
    '🟦 /call /sms /hangup(/h) /pickup(/p)- Phone commands , your number will be displayed on phone item',
    '🟦 /inv - If you want to access inventory by chat',
    '🟦 /useitem [slot]/[Exactly the same name] - slots was displayed in /inv list',
    '🟦 /dropitem [slot]/[Exactly the same name] - to drop item',
    '🟦 /giveitem [id] [slot/Exactly the same name] - for give something to someone else',
    '🟦 `J` - Vehicle interaction key',
    '🟦 After buying some clothes, if torso is not correct, type /torso [1-15], after that you have to save your outfit to save the torso on that set of clothes.',
    '🟦 /saveoutfit [name] - for save current outfit which was on you (it will converted to a Item and will be stored in your inventory)',
    '🟦 /helpup [id] - For help player to stand up',
    '🟦 /getup - After drop down with injuries use this command to stand up in 2 minutes',
    '🟦 /top - For remove top',
    '🟦 /pants - For remove pants',
    '🟦 /shirt - For remove shirt',
    '🟦 /shoes - For remove shoes',
    '🟦 /watch - For remove watch',
    '🟦 /glasses - For remove glasses',
    '🟦 /hat - For remove hat',
    '🟦 /accessories - For remove accessories',
    '🟦 /tie [target] - To tie someone(You need to have rope)',
    '🟦 /showid [target] - To show your ID',
    '🟦 /showlicenses [target] - To show your licenses',
    '🟦 /blindfold - You know what is it',
    '🟦 /damages [target] - Check damages or injuries',
    
]

const vehicle = [
    '🟦 `Z` - Turn on/off engine',
    '🟦 /v engine - To turn engine on/off',
    '🟦 `J` - When out of vehicle , opens vehicle Interaction menu',
    '🟦 /v - To check vehicle commands',
    '🟦 /v spawn - To spawn the vehicle',
    '🟦 /v park - To park the vehicle (after parking it, use /v despawn)',
    '🟦 /v lock - To lock the doors (You can lock them by pressing on `L` key)',
    '🟦 /v locate [id] - To find your vehicle (It should have navigator installed)',
    '🟦 /v sell - To sell the car for 70% of full price',
    '🟦 /v sellto [id] - To sell car to someone',
    '🟦 /v hotwire - To break engine and turn it on',
    '🟦 /speedlimit [speed] - For limiting the speed of vehicle',

]

const house = [
    '🟦 /buyhouse - To buy house',
    '🟦 /house sell - Sell house by 70% of full price',
    '🟦 /house sellto [id] - To sell house to someone',
    '🟦 /house plant [object_name] - To plant furniture',
    '🟦 /house editmap [map_id] - You will see map_id by /house mapshow',
    '🟦 /house mapshow - To see ids of furnitures',
    '🟦 /house deletemap [map_id] - To remove furniture',
    '🟦 /house lock - To open/close house doors',
]

const company = [
    '🟦 Theres no any information yet',
]

const faction = {
    "SASD" : [
        'San Andreas Sheriff Department commands',
        '🟦 /handcuff [targer] - To cuff someone',
        '🟦 /block - To plant road blocks or spikes',
        '🟦 /mdc - To access computer in cruiser',
        '🟦 /frisk - To frisk someone',
        '🟦 /confiscate [id] [slot] - To confiscate item',
        '🟦 `E` - for visual siren, `1`,`2`,`3`,`4` to turn on sirens',
        '🟦 /takelic [targer] [lic_id] - for revoke any licenses',
        '🟦 /givelic [target] [lic_id] - for grant license to someone',
    ],
    "SAFD": [
        'San Andreas Fire Department commands',
        '🟦 /treatplayer - To treat a palyer/remove wounds',
    ],
}

const job = {
    "Mechanic" : [
        'Mechanic Job - Commands and usage',
        '🟦 /tune - For tune vehicles',
        '🟦 /viewtune - For checking tuning components',
        '🟦 /refill - For refill fuel',
        '🟦 /repair - For repair vehicle',
        '🟦 /tuningnames - For check what modifications exist',
    ],
    "Farmer" : [
        'Farmer Job - Commands and usage',
        '🟦 After starting a job, on the minimap you will se checkpoint, just go there and harvest the fruits or whatever',
    ],
    "Lumber" : [
        'Lumber Job - Commands and usage',
        '🟦 After starting a job , in your inventory you will se `axe` , equip it and go to the checkpoint',
        '🟦 After cutting a tree you have to bring log back there, where you take the job, marker will be shown on your minimap',
        '🟦 After each turn , you need to reequip `axe` from your inventory',
    ],
    "Postalion" : [
        'Postalion Job - Commands and usage',
        '🟦 First of all u need to sit on the car, after you will be notified that you are starting the job. after that notification there will be a blimp on a minimap, go to the checkpoint, hop out from the car and press on `J` interaction button, take the box from the car and stand on checkpoint.',
        '🟦 If you want to end your routes, go to the postalions garage and press `Z`, you will be notified that the salary sit on your bank account.',
    ],
    "Taxi Driver" : [
        'Taxi Driver Job - Commands and usage',
        '🟦 After assuming to this job you have access to taxi cabs , you can drive it trying to catch clients and earn some money, its just freeroam job, which gives you access tu taxi cab',
    ],
    "Bus Driver": [
        'Bus Driver Job - Commands and usage',
        '🟦 After assuming to this job you have acces to buses',
        '🟦 Just go to the bus, sit there, it will throw nottification that contains text like `Are you ready to start the job`, accept it',
        '🟦 After accepting the job nottification , you will see checkpoints, follow them',
    ],
    "Trucker" : [
        'Trucker Job - Commands and usage',
        '🟦 After assuming to this job, you have to go on job checkpoint which was located under the chiliad mountine facing paleto bay, start on interaction menu, use `E` key for acces to interaction menu',
        '🟦 Choose what kind of vehicle you want to ride, after that choose product, delivery picks random checkpoints, one of them is in Los Santos too',
        '🟦 After you drive the car on checkpoint, You have to return the car to get salary',
    ],
    "Fishing" : [
        'Fishing Job - Commands and usage',
        '🟦 You have to use your fishing rode which was selling in weapon store in paleto bay',
        '🟦 Go near to the sea and use your fishing rode from your inventory',
    ],
};


console.log(job);

function appendUl() {
    $('#c_mainbar').empty().append(`
        <ul class='c_scroll mt-2 pt-5 px-5' style='list-style-type: none; z-index: 10' id='expand_ul'></ul>
    `);
};

function expandMain(params) {

    switch (params) {
        case 'general':
            appendUl();
            general.forEach(element => {
                $('#expand_ul').append(`
                    <li style='border-bottom: 2px dotted orange'><small>`+element+`</small></li>
                `)
            });
            break;
        case 'vehicle':
            appendUl();
            vehicle.forEach(element => {
                $('#expand_ul').append(`
                    <li style='border-bottom: 2px dotted orange'><small>`+element+`</small></li>
                `)
            });
            break;
        case 'house':
            appendUl();
            house.forEach(element => {
                $('#expand_ul').append(`
                    <li style='border-bottom: 2px dotted orange'><small>`+element+`</small></li>
                `)
            });
            break;
        case 'company':
            appendUl();
            company.forEach(element => {
                $('#expand_ul').append(`
                    <li style='border-bottom: 2px dotted orange'><small>`+element+`</small></li>
                `)
            });
            break;
        case 'faction':
            appendUl();
            const factionList = [faction.SASD, faction.SAFD];

            factionList.forEach(element => {
                for(let i = 0;i < element.length ; i++){
                    if (i == 0) {
                        $('#expand_ul').append(`
                            <li style='border-bottom: 2px dotted orange'><h3>`+element[i]+`</h3></li>
                        `)
                    }else {
                        $('#expand_ul').append(`
                            <li style='border-bottom: 2px dotted orange'><small>`+element[i]+`</small></li>
                        `) 
                    }
                }
            });
            break;
        case 'job':
            appendUl();
            const jobList = [job.Mechanic, job.Farmer, job.Fishing , job.Lumber, job.Postalion, job["Taxi Driver"], job.Trucker];
        

            jobList.forEach(element => {
                for(let i = 0;i < element.length ; i++){
                    if (i == 0) {
                        $('#expand_ul').append(`
                            <li style='border-bottom: 2px dotted orange'><h3>`+element[i]+`</h3></li>
                        `)
                    }else {
                        $('#expand_ul').append(`
                            <li style='border-bottom: 2px dotted orange'><small>`+element[i]+`</small></li>
                        `) 
                    }
                }
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

function openHelper() {
    $('body').append(`
    <div class="d-flex justify-content-center align-items-center w-100 vh-100" style="background-color: rgba(0, 0, 0, 0.119); display: flex;" id="command_helper_body">
        <div class="w-75 h-75 bg-light d-flex position-relative border rounded-2" style="overflow: hidden;">
            <div class="position-absolute bg-dark text-white w-100 d-flex justify-content-between align-items-center px-3 py-1" style="border-bottom: 1px solid rgba(82, 82, 82, 0.342); z-index: 2; overflow: hidden;top: 0;left: 0;">
                <p class="m-0 p-0">Command Helper</p>
                <span class="material-symbols-outlined" style="cursor: pointer;" onclick="closeHelper()">
                    close
                </span>
            </div>
            <div class="d-flex flex-column justify-content-start align-items-start c_scroll" style="min-width: 20%;height: 100%; border-right: 1px solid rgba(0, 0, 0, 0.135);">
                <ul id="c_sidebar" class="m-0 p-0 ps-2 d-flex flex-column" style="height: 100%;">
                    <li class="d-flex justify-content-start align-items-center mt-3" onclick="expandMain('general')" style="cursor: pointer;">
                        <span class="material-symbols-outlined">
                            keyboard_command_key
                        </span>
                        <p class="m-0 p-0">General</p>
                    </li>
                    <li class="d-flex justify-content-start align-items-center" onclick="expandMain('vehicle')" style="cursor: pointer;">
                        <span class="material-symbols-outlined">
                            directions_car
                        </span>
                        <p class="m-0 p-0">Vehicle Help</p>
                    </li>
                    <li class="d-flex justify-content-start align-items-center" onclick="expandMain('house')" style="cursor: pointer;">
                        <span class="material-symbols-outlined">
                            apartment
                        </span>
                        <p class="m-0 p-0">House Help</p>
                    </li>
                    <li class="d-flex justify-content-start align-items-center" onclick="expandMain('company')" style="cursor: pointer;">
                        <span class="material-symbols-outlined">
                            query_stats
                        </span>
                        <p class="m-0 p-0">Company Help</p>
                    </li>
                    <li class="d-flex justify-content-start align-items-center" onclick="expandMain('faction')" style="cursor: pointer;">
                        <span class="material-symbols-outlined">
                            groups
                        </span>
                        <p class="m-0 p-0">Faction Help</p>
                    </li>
                    <li class="d-flex justify-content-start align-items-center" onclick="expandMain('job')" style="cursor: pointer;">
                        <span class="material-symbols-outlined">
                            work
                        </span>
                        <p class="m-0 p-0">Job Help</p>
                    </li>
                </ul>
            </div>
            <div class="position-relative flex-column bg-light justify-content-start align-items-start" style="width: 80%;height: 100%; overflow-y: auto;" id="c_mainbar">
                
            </div>
        </div>
    </div>
    `);
}

expandMain();
