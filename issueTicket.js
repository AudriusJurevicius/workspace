const list = document.querySelector("#ticket-list");
const filter = document.querySelector("#filter");

const btnGetList = document.querySelector("#btn-ticket-list");
const btnIssueTicket = document.querySelector("#btn-ticket-issue");
const btnEncashTicket = document.querySelector("#btn-ticket-encash");

const tickets = [
    {id: 882416, name: 'Grand Prix Russia 2019 Feeder Ticket# (1,540 RUB)', settl: 'pp_PPLIVERUB'},
    {id: 882415, name: 'Grand Prix Russia 2019 Feeder Ticket# (3,080 RUB)', settl: 'pp_PPLIVERUB'},
    {id: 881972, name: 'Grand Prix Russia 2019 Main Event (15,400 RUB) Seat#', settl: 'pp_PPLIVERUB'},
    {id: 875359, name: 'Sochi Poker Festival Main Event Seat# (38,500 RUB)', settl: 'pp_PPLIVERUB'},
    {id: 880158, name: 'Sochi Poker Fest Satellite Ticket# (2,200 RUB)', settl: 'pp_PPLIVERUB'},
    {id: 880159, name: 'Sochi Poker Fest Satellite Ticket# (4,400 RUB)', settl: 'pp_PPLIVERUB'},
    {id: 919358, name: 'MILLIONS Loyalty Promo $2.7k', settl: 'pp_event1201'},
    {id: 881976, name: 'MILLIONS Online 2019 Feeder Ticket - $22 #', settl: 'pp_event1201'},
    {id: 879088, name: 'MILLIONS Online 2019 Feeder Ticket - $109#', settl: 'pp_event1201'},
    {id: 904359, name: 'WSOP-C Uruguay $1,100 Seat#', settl: 'pp_event1201'},
    {id: 904361, name: 'WSOP-C Uruguay $109 Ticket#', settl: 'pp_event1201'},
    {id: 904376, name: 'WSOP-C Uruguay $22 Ticket#', settl: 'pp_event1201'},
    {id: 904377, name: 'WSOP-C Uruguay $11 Ticket#', settl: 'pp_event1201'},
    {id: 907369, name: 'WSOP-C Uruguay Final Millonaria $320 Ticket#', settl: 'pp_event1201'},
    {id: 907370, name: 'WSOP-C Uruguay Final Millonaria $33 Ticket#', settl: 'pp_event1201'},
    {id: 896361, name: 'Cosmopol X-Mas Pokerweek $5.50 Ticket#', settl: 'pp_event1201'},
    {id: 877367, name: 'Cosmopol X-Mas Pokerweek $11 Ticket#', settl: 'pp_event1201'},
    {id: 896360, name: 'Cosmopol X-Mas Pokerweek $55 Ticket#', settl: 'pp_event1201'},
    {id: 886369, name: 'partypoker MILLION MTT Ticket - $215 [PPL$#]', settl: 'pp_event1201'},
    {id: 882360, name: 'partypoker MILLION $215 Ticket #', settl: 'pp_event1201'},
    {id: 883361, name: 'partypoker MILLION $22 Satellite Ticket #', settl: 'pp_event1201'},
    {id: 770441, name: 'PP LIVE $3.30 Ticket#', settl: 'pp_event1201'},
    {id: 770495, name: 'PP LIVE $11 Ticket#', settl: 'pp_event1201'},
    {id: 802363, name: 'PP LIVE $33 Ticket#', settl: 'pp_event1201'},
    {id: 765772, name: 'PP LIVE $109 Ticket#', settl: 'pp_event1201'},
    {id: 875361, name: 'PP LIVE $11 Ticket - CnC#', settl: 'pp_event1201'},
    {id: 875362, name: 'PP LIVE $1.10 Ticket - CnC#', settl: 'pp_event1201'},
    {id: 875363, name: 'PP LIVE $3.30 Ticket - CnC#', settl: 'pp_event1201'},
    {id: 849362, name: 'PP LIVE $0.33 Ticket - CnC#', settl: 'pp_event1201'},
    {id: 849373, name: 'PP LIVE $0.11 Ticket - CnC#', settl: 'pp_event1201'},
    {id: 0, name: 'CPP 2019: Ticket Name', settl: 'pp_event1201'}
]

btnGetList.addEventListener("click", (e) => {
    e.preventDefault();
    let q = e.target.parentElement.children;
    if (q[0].value != "") {
        getTicketList(q[0].value);
    }
});

btnIssueTicket.addEventListener("click", (e) => {
    e.preventDefault();
    let q = e.target.parentElement.children;
    if (q[0].value != "" && q[1].value != "" && q[2].value != "") {
        issueTicket(q[0].value,q[1].value,q[2].value);
    }
});

btnEncashTicket.addEventListener("click", (e) => {
 
});

filter.addEventListener("keyup", filterTickets);

list.addEventListener("click", (event) => {
    event.preventDefault();
    //console.log(event.target)
    if (event.target.classList.contains("btn") && !event.target.classList.contains("disabled")) {
        //if element pressed is a button then we are here,
        let elementList = event.target.parentElement.children;
        if (event.target.classList.contains("getList") && elementList[3].textContent != "") {
            getTicketList(elementList[3].textContent);
        }
        if (event.target.classList.contains("issue") && elementList[1].value != "" && elementList[2].value != "") {
            issueTicket(elementList[3].textContent, elementList[1].value, elementList[2].value);
        }
        if (event.target.classList.contains("encash")) {
            encashTicket(elementList[3].textContent, elementList[1].value, elementList[2].value);
        }
    }
});

function getTicketList(ticketID){
    if (ticketID != "") {
        let q = "https://preports-new.iglobalmedia.com/pls/ppoker/P_R_Freeroll_Player_Info";
        window.open(`${q}?In_Choice=2&In_Freeroll_Id=${ticketID}&in_status=0`,
        "_blank");
    }
}

function issueTicket(ticketID,username,comment) {
    if (ticketID != "" && username != "" && comment != "" && confirm(`Are you sure you want to issue (Ticket ID: ${ticketID}) for ${username}?`)) {
        let q = "https://preports-new.iglobalmedia.com/pls/ppoker/p_r_issue_userfreeroll";
        window.open(`${q}?stage=2&account_name=${username}&freeroll_id=${ticketID}&in_brand_id=${getFrontEnd(username)}&p_comments=${comment}`,
        "_blank");
    }
}

function getSettlementAccount(ticketID) {
    let q = tickets.find(el => el.id == ticketID);
    return q.settl;
}

function encashTicket(ticketID,username,comment) {
    if (ticketID != "" && username != "" && comment != "") {
        console.log(`ID: ${ticketID}, encash from: ${username}, with comment: ${comment}, to: ${getSettlementAccount(ticketID)}`);
        let q = `https://preports-new.iglobalmedia.com/pls/ppoker/p_r_fr_bulk_refund_stage1`
        window.open(`${q}?in_remarks=${comment}&in_target_account_name=${getSettlementAccount(ticketID)}&in_freeroll_id=${ticketID}&in_stage=3&in_target_percent=100&in_accounts=${username}`,
        "_blank");
    }
}

function getFrontEnd(username) {
    if (username.startsWith('bb_')) { return 'BWINBE'; } else 
    if (username.startsWith('bd_')) { return 'BWINDK'; } else 
    if (username.startsWith('be_')) { return 'BWINES'; } else 
    if (username.startsWith('bf_')) { return 'BWINFR'; } else 
    if (username.startsWith('bi_')) { return 'BWINIT'; } else 
    if (username.startsWith('br_')) { return 'BWINGR'; } else 
    if (username.startsWith('bz_')) { return 'BWINCOM'; } else 
    if (username.startsWith('cp_')) { return 'PPCZECH'; } else 
    if (username.startsWith('dk_')) { return 'PARTYDK'; } else 
    if (username.startsWith('ds_')) { return 'DANSKESPIL'; } else 
    if (username.startsWith('fr_')) { return 'PARTYFR'; } else 
    if (username.startsWith('gd_')) { return 'GIOCOD'; } else 
    if (username.startsWith('ii_')) { return 'INTRALOTIT'; } else 
    if (username.startsWith('pa_')) { return 'PRTYPREM'; } else 
    if (username.startsWith('pe_')) { return 'PARTYES'; } else 
    if (username.startsWith('pi_')) { return 'PARTYIT'; } else 
    if (username.startsWith('pm_')) { return 'PMU'; } else 
    if (username.startsWith('pp_')) { return 'PARTYPOKER'; } else 
    if (username.startsWith('pr_')) { return 'PREMIUM'; } else 
    if (username.startsWith('ps_')) { return 'PARTYSE'; } else 
    if (username.startsWith('sb_')) { return 'SBCOM'; } else 
    if (username.startsWith('sg_')) { return 'SBGREECE'; } else 
    if (username.startsWith('sh_')) { return 'BWINSH'; } else 
    if (username.startsWith('vb_')) { return 'VISTABET'; } else 
    {
        return "undefined";
    }
}

function filterTickets(e) {
    var text = e.target.value.toLowerCase();
    var listItems = document.querySelectorAll(".ticket-list-item");
    Array.from(listItems).forEach(item => {
        let ticketName = item.children[0].textContent;
        if (ticketName.toLowerCase().indexOf(text) != -1) {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    })
}


tickets.forEach(el => {

    let block = document.createElement("div");
    block.classList = "row mb-2 alert alert-dark ticket-list-item";

    let elTicketName = document.createElement("p")
    elTicketName.classList = "col-12 text-bold ticket-list-item-name h5";
    elTicketName.appendChild(document.createTextNode(el.name));
    block.appendChild(elTicketName);

    let elUsername = document.createElement("input")
    elUsername.setAttribute("type", "text");
    elUsername.classList = "col-12 col-sm-4 form-control username";
    elUsername.setAttribute("placeholder", "username");
    block.appendChild(elUsername);

    let elComment = document.createElement("input")
    elComment.setAttribute("type", "text");
    elComment.classList = "col-12 col-sm-8 form-control comment";
    elComment.setAttribute("placeholder", "Reason for actions");
    block.appendChild(elComment);

    let elTicketID = document.createElement("div")
    elTicketID.classList = "text-center bg-warning p-2 ticket-ID";
    elTicketID.appendChild(document.createTextNode(el.id));
    block.appendChild(elTicketID);

    let btn1 = document.createElement("button");
    btn1.classList = "btn btn-warning getList";
    btn1.appendChild(document.createTextNode("Ticket List"));
    block.appendChild(btn1);

    let btn2 = document.createElement("button");
    btn2.classList = "btn btn-success issue";
    btn2.appendChild(document.createTextNode("Issue"));
    block.appendChild(btn2);

    let btn3 = document.createElement("button");
    btn3.classList = "btn btn-danger encash";
    btn3.appendChild(document.createTextNode("Encash"));
    block.appendChild(btn3);

    list.appendChild(block);
})

