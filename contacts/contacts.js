
let allContacts = []

const addContact = function(firstName, lastName, email) {
  if (typeof firstName !== "string" ||
    typeof lastName !== "string" ||
    typeof email !== "string") {
      throw new Error("New contact information must be submitted as strings")
  }
  allContacts.push({
    "first_name": firstName,
    "last_name": lastName,
    "email": email
  })
}

const addContacts = function(contactData) {
  if (typeof contactData !== "object") {
    throw new Error("New list of contacts must be an array")
  }
  try {
    contactData.forEach((element) => {
      allContacts.push(element)
    })
  } catch (e) {
    console.log(e)
  }
}

const printContacts = function() {
  console.log('printContacts:', 'TODO')
  console.log('Loading contact data...')

  let sortedContacts = allContacts.sort((a, b) => {
    let lastNameA = a.last_name.toLowerCase()
    let lastNameB = b.last_name.toLowerCase()

    if (lastNameA < lastNameB) {
      return -1
    }
    if (lastNameA > lastNameB) {
      return 1
    }
    return 0
  })

  let longestNameLength = 0
  for(let i = 0; i < sortedContacts.length; i++) {
    let nameLength = sortedContacts[i]['first_name'].length + sortedContacts[i]['last_name'].length + 1
    if (nameLength > longestNameLength) {
      longestNameLength = nameLength
    }
  }

  let longestEmailLength = 0
  for (let i = 0; i < sortedContacts.length; i++) {
    let emailLength = sortedContacts[i]['email'].length
    if (emailLength > longestEmailLength) {
      longestEmailLength = emailLength
    }
  }

  console.log('...Finished loading contact data')
  console.log(`\n`)
  console.log('All Contacts:')
  let divider = "|" + "-".repeat(longestNameLength + 2) + "+" + "-".repeat(longestEmailLength + 2) + "|"
  let lineStart = "| "
  let title = "| " + "Full Name" + " ".repeat(longestNameLength - 8) +
    "| " + "Email Address" + " ".repeat(longestEmailLength - 12) +
    "|"

  console.log(divider)
  console.log(title)
  console.log(divider)
  sortedContacts.forEach((contact) => {
    let wholeName = contact['first_name'] + " " + contact['last_name']
    let line = "| " + wholeName +
      " ".repeat(longestNameLength - wholeName.length + 1) +
      "| " + contact['email'] +
      " ".repeat(longestEmailLength - contact['email'].length + 1) +
      "|"
    console.log(line)
  })
  console.log(divider)
}

///////////////////////////////////////////////////////////////////////////

addContacts([{
  "first_name": "Tanny",
  "last_name": "Vibert",
  "email": "tvibert0@illinois.edu"
}, {
  "first_name": "Tova",
  "last_name": "Myall",
  "email": "tmyall1@instagram.com"
}, {
  "first_name": "Engracia",
  "last_name": "Folger",
  "email": "efolger2@epa.gov"
}, {
  "first_name": "Conroy",
  "last_name": "Honsch",
  "email": "chonsch3@sohu.com"
}, {
  "first_name": "Virgina",
  "last_name": "Cankett",
  "email": "vcankett4@washington.edu"
}, {
  "first_name": "Mateo",
  "last_name": "Da Costa",
  "email": "mdacosta5@about.com"
}, {
  "first_name": "Ambrose",
  "last_name": "Scullard",
  "email": "ascullard6@timesonline.co.uk"
}, {
  "first_name": "Shaylah",
  "last_name": "Fairney",
  "email": "sfairney7@stumbleupon.com"
}, {
  "first_name": "Pier",
  "last_name": "Waine",
  "email": "pwaine8@unc.edu"
}, {
  "first_name": "Karita",
  "last_name": "Bough",
  "email": "kbough9@angelfire.com"
}, {
  "first_name": "Marguerite",
  "last_name": "Lafayette",
  "email": "mlafayettea@bravesites.com"
}, {
  "first_name": "Northrop",
  "last_name": "Bauchop",
  "email": "nbauchopb@pagesperso-orange.fr"
}, {
  "first_name": "Devon",
  "last_name": "Bocking",
  "email": "dbockingc@comcast.net"
}, {
  "first_name": "Willdon",
  "last_name": "Hedley",
  "email": "whedleyd@purevolume.com"
}, {
  "first_name": "Charil",
  "last_name": "Clegg",
  "email": "cclegge@weibo.com"
}, {
  "first_name": "Nessi",
  "last_name": "Bywaters",
  "email": "nbywatersf@shop-pro.jp"
}, {
  "first_name": "Mercy",
  "last_name": "Browncey",
  "email": "mbrownceyg@yelp.com"
}, {
  "first_name": "Didi",
  "last_name": "Grose",
  "email": "dgroseh@google.com.hk"
}, {
  "first_name": "Niccolo",
  "last_name": "Spruce",
  "email": "nsprucei@wordpress.com"
}, {
  "first_name": "Winston",
  "last_name": "Hixley",
  "email": "whixleyj@homestead.com"
}])
printContacts()
