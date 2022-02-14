/**
 * Help Menu
 * @param {prefix} prefix bot prefix
 * @param {pushname} pushname someone name
 * @returns string
 */
  var monospace = '```'
  var miring = '_'
  var yes = '```'
exports.help = (prefix, k, pushname) => {
return `

${monospace}DOWNLOAD MENU${monospace}
${k++}. ➭ ${prefix}ytmp4
${k++}. ➭ ${prefix}ytmp3
${k++}. ➭ ${prefix}play
${k++}. ➭ ${prefix}play2
${k++}. ➭ ${prefix}tiktoknowm
${k++}. ➭ ${prefix}igdl [ Link ]
${k++}. ➭ ${prefix}ytsearch [ query ]
${k++}. ➭ ${prefix}mediafire [ Link ]


${monospace}FOTO EDITING${monospace}
${k++}. ➭ ${prefix}bikinmeme
${k++}. ➭ ${prefix}ytcomment
${k++}. ➭ ${prefix}rip
${k++}. ➭ ${prefix}imagewasted

${monospace}ABOUT BOT${monospace}
${k++}. ➭ ${prefix}ping
${k++}. ➭ ${prefix}speed
${k++}. ➭ ${prefix}runtime
${k++}. ➭ ${prefix}donasi
${k++}. ➭ ${prefix}waktu
${k++}. ➭ ${prefix}tes
${k++}. ➭ ${prefix}sc
${k++}. ➭ ${prefix}bugreport [ query ]



${monospace}ABSEN & VOTING${monospace}
${k++}. ➭ hadir (reply)  ( comming soon )
${k++}. ➭ sakit (reply)  ( comming soon )
${k++}. ➭ ${prefix}mulaiabsen
${k++}. ➭ ${prefix}cekabsen
${k++}. ➭ ${prefix}delabsen  ( comming soon )
${k++}. ➭ vote (reply)  ( comming soon )
${k++}. ➭ devote (reply)  ( comming soon )
${k++}. ➭ ${prefix}voting @tag|text|1 (1=1 menit)
${k++}. ➭ ${prefix}delvote ( comming soon )



${monospace}STORE COMMAND${monospace}
${k++}. ➭ ${prefix}sewa
${k++}. ➭ ${prefix}sewabot
${k++}. ➭ ${prefix}rdp
${k++}. ➭ ${prefix}vps
${k++}. ➭ ${prefix}jasrun



${monospace}MAKER COMMAND${monospace}
${k++}. ➭ ${prefix}neon [ text ]
${k++}. ➭ ${prefix}joker [ text ]
${k++}. ➭ ${prefix}graffiti [ text ]
${k++}. ➭ ${prefix}blackpink [ text ]
${k++}. ➭ ${prefix}logo [ text ]
${k++}. ➭ ${prefix}logo1 [ text ]
${k++}. ➭ ${prefix}3d [ text ]
${k++}. ➭ ${prefix}harrypoter [ text ]
${k++}. ➭ ${prefix}matrix [ text ]



${monospace}RANDOM MENU${monospace}
${k++}. ➭ ${prefix}aesthetic
${k++}. ➭ ${prefix}kece
${k++}. ➭ ${prefix}cerpen
${k++}. ➭ ${prefix}cersex
${k++}. ➭ ${prefix}quotes
${k++}. ➭ ${prefix}fakta
${k++}. ➭ ${prefix}quotes
${k++}. ➭ ${prefix}quotesdiLan
${k++}. ➭ ${prefix}quotesanime
${k++}. ➭ ${prefix}quotesimage
${k++}. ➭ ${prefix}faktaunik
${k++}. ➭ ${prefix}katabijak
${k++}. ➭ ${prefix}pantun
${k++}. ➭ ${prefix}quotesislami
${k++}. ➭ ${prefix}bucin
${k++}. ➭ ${prefix}bucin2
${k++}. ➭ ${prefix}randomnama
${k++}. ➭ ${prefix}hoax
${k++}. ➭ ${prefix}memeindo
${k++}. ➭ ${prefix}darkjoke
${k++}. ➭ ${prefix}memekertas
${k++}. ➭ ${prefix}ppcp
${k++}. ➭ ${prefix}ppcouple


${monospace}OTHER MENU${monospace}
${k++}. ➭ ${prefix}togel
${k++}. ➭ ${prefix}cekwatak
${k++}. ➭ ${prefix}cekmati [nama]
${k++}. ➭ ${prefix}wangy [nama]
${k++}. ➭ ${prefix}toxic
${k++}. ➭ ${prefix}truth
${k++}. ➭ ${prefix}dare
${k++}. ➭ ${prefix}apakah
${k++}. ➭ ${prefix}bisakah
${k++}. ➭ ${prefix}kapankah
${k++}. ➭ ${prefix}memeindo
${k++}. ➭ ${prefix}cecan
${k++}. ➭ ${prefix}cogan
${k++}. ➭ ${prefix}darkjoke
${k++}. ➭ ${prefix}rate
${k++}. ➭ ${prefix}bay
${k++}. ➭ ${prefix}selamatdatang
${k++}. ➭ ${prefix}jadian
${k++}. ➭ ${prefix}cantik
${k++}. ➭ ${prefix}ganteng
${k++}. ➭ ${prefix}hobby
${k++}. ➭ ${prefix}beban
${k++}. ➭ ${prefix}babi
${k++}. ➭ ${prefix}cekganteng
${k++}. ➭ ${prefix}cekcantik 


${monospace}SEARCH COMMAND${monospace}
${k++}. ➭ ${prefix}pinterest [ query ]
${k++}. ➭ ${prefix}google [ query ]
${k++}. ➭ ${prefix}ssweb [ Link ]

${monospace}ASUPAN MENU${monospace}
${k++}. ➭ ${prefix}cecan
${k++}. ➭ ${prefix}random
${k++}. ➭ ${prefix}ukhty
${k++}. ➭ ${prefix}santuy
${k++}. ➭ ${prefix}hijaber
${k++}. ➭ ${prefix}indonesia
${k++}. ➭ ${prefix}malaysia
${k++}. ➭ ${prefix}thailand
${k++}. ➭ ${prefix}vietnam
${k++}. ➭ ${prefix}china
${k++}. ➭ ${prefix}korea
${k++}. ➭ ${prefix}jepang

${monospace}MAKER COMMAND${monospace}
${k++}. ➭ ${prefix}ninja teks | teks2
${k++}. ➭ ${prefix}joker teks | teks2
${k++}. ➭ ${prefix}neon_devil teks
${k++}. ➭ ${prefix}wolf_g teks | teks2
${k++}. ➭ ${prefix}lion teks | teks2
${k++}. ➭ ${prefix}Pornhub teks | teks2
${k++}. ➭ ${prefix}Horror teks | teks2
${k++}. ➭ ${prefix}Sketch teks
${k++}. ➭ ${prefix}Rainbow teks
${k++}. ➭ ${prefix}Demon teks
${k++}. ➭ ${prefix}Halloween teks
${k++}. ➭ ${prefix}Halloween2 teks | teks2
${k++}. ➭ ${prefix}Sircuit teks
${k++}. ➭ ${prefix}Discovery teks
${k++}. ➭ ${prefix}Skeleton teks


${monospace}EPHOTO MENU${monospace}
${k++}. ➭ ${prefix}wetglass text
${k++}. ➭ ${prefix}multicolor3d text
${k++}. ➭ ${prefix}watercolor text
${k++}. ➭ ${prefix}luxurygold text
${k++}. ➭ ${prefix}galaxywallpaper text
${k++}. ➭ ${prefix}lighttext text
${k++}. ➭ ${prefix}beautifulflower text
${k++}. ➭ ${prefix}puppycute text
${k++}. ➭ ${prefix}royaltext text
${k++}. ➭ ${prefix}heartshaped text
${k++}. ➭ ${prefix}birthdaycake text
${k++}. ➭ ${prefix}galaxystyle text
${k++}. ➭ ${prefix}hologram3d text
${k++}. ➭ ${prefix}greenneon text
${k++}. ➭ ${prefix}glossychrome text
${k++}. ➭ ${prefix}greenbush text
${k++}. ➭ ${prefix}metallogo text
${k++}. ➭ ${prefix}noeltext text
${k++}. ➭ ${prefix}glittergold text
${k++}. ➭ ${prefix}textcake text
${k++}. ➭ ${prefix}starsnight text
${k++}. ➭ ${prefix}wooden3d text
${k++}. ➭ ${prefix}textbyname text
${k++}. ➭ ${prefix}writegalacy text
${k++}. ➭ ${prefix}galaxybat text
${k++}. ➭ ${prefix}snow3d text
${k++}. ➭ ${prefix}birthdayday text
${k++}. ➭ ${prefix}goldplaybutton text
${k++}. ➭ ${prefix}silverplaybutton text
${k++}. ➭ ${prefix}freefire text

${monospace}NSFW COMMAND${monospace}
${k++}. ➭ ${prefix}awoo
${k++}. ➭ ${prefix}blowjob
${k++}. ➭ ${prefix}hentai
${k++}. ➭ ${prefix}megumin
${k++}. ➭ ${prefix}neko
${k++}. ➭ ${prefix}trapnime
${k++}. ➭ ${prefix}loli
${k++}. ➭ ${prefix}husbu
${k++}. ➭ ${prefix}milf
${k++}. ➭ ${prefix}cosplay

${monospace}GROUP COMMAND${monospace}
${k++}. ➭ ${prefix}nsfw 1 / 0
${k++}. ➭ ${prefix}group open / close
${k++}. ➭ ${prefix}antilink on / off
${k++}. ➭ ${prefix}antiwame on / off
${k++}. ➭ ${prefix}welcome on / off
${k++}. ➭ ${prefix}linkgc
${k++}. ➭ ${prefix}tagall
${k++}. ➭ ${prefix}add
${k++}. ➭ ${prefix}kick
${k++}. ➭ ${prefix}creategroup
${k++}. ➭ ${prefix}sticktag
${k++}. ➭ ${prefix}promote
${k++}. ➭ ${prefix}demote
${k++}. ➭ ${prefix}promoteall
${k++}. ➭ ${prefix}demoteall
${k++}. ➭ ${prefix}revoke
${k++}. ➭ ${prefix}leave

${monospace}OWNER MENU${monospace}
${k++}. ➭ ${prefix}setmenu
${k++}. ➭ ${prefix}setallmenu
${k++}. ➭ ${prefix}setprefix multi / nopref
${k++}. ➭ ${prefix}hidetag
${k++}. ➭ ${prefix}mode
${k++}. ➭ ${prefix}bc
${k++}. ➭ ${prefix}setbio
${k++}. ➭ ${prefix}setname
${k++}. ➭ ${prefix}self
${k++}. ➭ ${prefix}public
${k++}. ➭ ${prefix}exif
${k++}. ➭ ${prefix}leave
${k++}. ➭ ${prefix}addcmd
${k++}. ➭ ${prefix}delcmd
${k++}. ➭ ${prefix}listcmd



${monospace}STICKER MENU${monospace}
${k++}. ➭ ${prefix}take
${k++}. ➭ ${prefix}swm
${k++}. ➭ ${prefix}sticker [ Reply ]
${k++}. ➭ ${prefix}toimg
${k++}. ➭ ${prefix}attp




`
}