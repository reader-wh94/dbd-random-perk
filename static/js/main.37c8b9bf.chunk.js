(this["webpackJsonpdbd-randomizer"]=this["webpackJsonpdbd-randomizer"]||[]).push([[0],{19:function(e,r,n){},25:function(e,r,n){},26:function(e,r,n){"use strict";n.r(r);var s,i,a,o,m,u,g,l=n(1),t=n.n(l),v=n(11),d=n.n(v),c=(n(19),n(2)),p=n(3),k=n(5),P=n(4),b=n(9),h=n(0);var I,_=p.a.div(s||(s=Object(c.a)(["\n  display: block;\n  text-align: center;\n  font-size: 20px;\n  color: #e38842;\n  margin-bottom: 3rem;\n"]))),j=p.a.hr(i||(i=Object(c.a)(["\n  text-align: center;\n  width: 70rem;\n  border-bottom: 1px dashed #ccc;\n  background: #999;\n  }\n"]))),A=p.a.div(a||(a=Object(c.a)(["\n  display: block;\n"]))),O=p.a.div(o||(o=Object(c.a)(["\n  display: inline-box;\n  margin-bottom: 2rem;\n\n  .perkName {\n    font-size: 1.3rem;\n    color: #dcccff;\n  }\n\n  .perkImg {\n    margin-right: 0.5rem;\n    height: 15rem;\n  }\n"]))),f=p.a.div(m||(m=Object(c.a)(["\n  margin-bottom: 2rem;\n\n  .itemName {\n    font-size: 1.3rem;\n    color: #dcccff;\n  }\n\n  .itemImg {\n    height: 14rem;\n  }\n"]))),y=p.a.div(u||(u=Object(c.a)(["\n  display: inline-box;\n  margin-bottom: 2rem;\n\n  .addOnName {\n    font-size: 1.3rem;\n    color: #dcccff;\n  }\n\n  .addOnImg {\n    height: 14rem;\n  }\n"]))),S=p.a.button(g||(g=Object(c.a)(["\n  /* \uacf5\ud1b5 \uc2a4\ud0c0\uc77c */\n  display: box;\n  outline: none;\n  border: none;\n  border-radius: 4px;\n  color: white;\n  font-weight: bold;\n  cursor: pointer;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  margin-top: 0.5rem;\n  margin-bottom: 1rem;\n\n  /* \ud06c\uae30 */\n  height: 2rem;\n  font-size: 1.5rem;\n\n  /* \uc0c9\uc0c1 */\n  background: #228be6;\n  &:hover {\n    background: ",";\n  }\n  &:active {\n    background: ",";\n  }\n\n  /* \uae30\ud0c0 */\n  & + & {\n    margin-left: 1rem;\n  }\n"])),Object(b.b)(.1,"#228be6"),Object(b.a)(.1,"#228be6")),x=function(){var e=P.perks,r=e.length,n=P.items,s=n.length,i=P.addOns,a=i.length,o=Object(l.useState)(),m=Object(k.a)(o,2),u=m[0],g=m[1],t=Object(l.useState)(),v=Object(k.a)(t,2),d=v[0],c=v[1],p=Object(l.useState)(),b=Object(k.a)(p,2),I=b[0],x=b[1];function B(e,r){for(var n=[],s=0;s<r;s++){var i=Math.floor(Math.random()*e);-1===n.indexOf(i)?n.push(i):s--}return n}function T(o){if("perk"===o){var m=B(r,4);g(m.map((function(r,n){return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"perkImg",src:e[r].url,alt:"pic"})}),Object(h.jsx)("span",{className:"perkName",children:e[r].name})]},n)})))}else if("item"===o){var u=B(s,1);c(u.map((function(e,r){return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"itemImg",src:n[e].url,alt:"pic"})}),Object(h.jsx)("span",{className:"itemName",children:n[e].name})]},r)})))}else if("addon"===o){var l=B(a,2);x(l.map((function(e,r){return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"addOnImg",src:i[e].url,alt:"pic"})}),Object(h.jsx)("span",{className:"addOnName",children:i[e].name})]},r)})))}}return Object(h.jsxs)(_,{children:[Object(h.jsxs)(A,{children:[Object(h.jsx)("h2",{children:"Random Perk"}),Object(h.jsx)(S,{onClick:function(){return T("perk")},children:"Click"})]}),Object(h.jsx)(O,{children:u}),Object(h.jsx)(j,{}),Object(h.jsxs)(A,{children:[Object(h.jsx)("h2",{children:"Random Item"}),Object(h.jsx)(S,{onClick:function(){return T("item")},children:"Click"})]}),Object(h.jsx)(f,{children:d}),Object(h.jsx)(j,{}),Object(h.jsxs)(A,{children:[Object(h.jsx)("h2",{children:"Random AddOns"}),Object(h.jsx)(S,{onClick:function(){return T("addon")},children:"Click"})]}),Object(h.jsx)(y,{children:I})]})};var B=p.a.div(I||(I=Object(c.a)(["\n  text-align: center;\n"]))),T=function(){return Object(h.jsxs)(B,{children:[Object(h.jsx)("h1",{children:"Dead By Daylight random perk"}),Object(h.jsx)("br",{}),Object(h.jsx)(x,{})]})};n(25);var w=function(){return Object(h.jsx)(T,{})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(r){var n=r.getCLS,s=r.getFID,i=r.getFCP,a=r.getLCP,o=r.getTTFB;n(e),s(e),i(e),a(e),o(e)}))};d.a.render(Object(h.jsx)(t.a.StrictMode,{children:Object(h.jsx)(w,{})}),document.getElementById("root")),M()},4:function(e){e.exports=JSON.parse('{"perks":[{"name":"Ace in the Hole","url":"images/survivorPerks/IconPerks_aceInTheHole.png"},{"name":"Adrenaline","url":"images/survivorPerks/IconPerks_adrenaline.png"},{"name":"Aftercare","url":"images/survivorPerks/IconPerks_aftercare.png"},{"name":"Alert","url":"images/survivorPerks/IconPerks_alert.png"},{"name":"Any Means Necessary","url":"images/survivorPerks/IconPerks_anyMeansNecessary.png"},{"name":"Appraisal","url":"images/survivorPerks/IconPerks_appraisal.png"},{"name":"Autodidact","url":"images/survivorPerks/IconPerks_autodidact.png"},{"name":"Babysitter","url":"images/survivorPerks/IconPerks_babysitter.png"},{"name":"Balanced Landing","url":"images/survivorPerks/IconPerks_balancedLanding.png"},{"name":"Better Together","url":"images/survivorPerks/IconPerks_betterTogether.png"},{"name":"Bite the Bullet","url":"images/survivorPerks/IconPerks_biteTheBullet.png"},{"name":"Blast Mine","url":"images/survivorPerks/IconPerks_blastMine.png"},{"name":"Blood Pact","url":"images/survivorPerks/IconPerks_bloodPact.png"},{"name":"Boil Over","url":"images/survivorPerks/IconPerks_boilOver.png"},{"name":"Bond","url":"images/survivorPerks/IconPerks_bond.png"},{"name":"Borrowed Time","url":"images/survivorPerks/IconPerks_borrowedTime.png"},{"name":"Botany Knowledge","url":"images/survivorPerks/IconPerks_botanyKnowledge.png"},{"name":"Breakdown","url":"images/survivorPerks/IconPerks_breakdown.png"},{"name":"Breakout","url":"images/survivorPerks/IconPerks_breakout.png"},{"name":"Buckle Up","url":"images/survivorPerks/IconPerks_buckleUp.png"},{"name":"Built to Last","url":"images/survivorPerks/IconPerks_builtToLast.png"},{"name":"Calm Spirit","url":"images/survivorPerks/IconPerks_calmSpirit.png"},{"name":"Camaraderie","url":"images/survivorPerks/IconPerks_camaraderie.png"},{"name":"Counterforce","url":"images/survivorPerks/IconPerks_counterforce.png"},{"name":"Dance With Me","url":"images/survivorPerks/IconPerks_danceWithMe.png"},{"name":"Dark Sense","url":"images/survivorPerks/IconPerks_darkSense.png"},{"name":"Dead Hard","url":"images/survivorPerks/IconPerks_deadHard.png"},{"name":"Deception","url":"images/survivorPerks/IconPerks_deception.png"},{"name":"Decisive Strike","url":"images/survivorPerks/IconPerks_decisiveStrike.png"},{"name":"D\xe9j\xe0 Vu","url":"images/survivorPerks/IconPerks_dejaVu.png"},{"name":"Deliverance","url":"images/survivorPerks/IconPerks_deliverance.png"},{"name":"Desperate Measures","url":"images/survivorPerks/IconPerks_desperateMeasures.png"},{"name":"Detective\'s Hunch","url":"images/survivorPerks/IconPerks_detectivesHunch.png"},{"name":"Distortion","url":"images/survivorPerks/IconPerks_distortion.png"},{"name":"Diversion","url":"images/survivorPerks/IconPerks_diversion.png"},{"name":"Empathy","url":"images/survivorPerks/IconPerks_empathy.png"},{"name":"Fast Track","url":"images/survivorPerks/IconPerks_fastTrack.png"},{"name":"Fixated","url":"images/survivorPerks/IconPerks_fixated.png"},{"name":"Flashbang","url":"images/survivorPerks/IconPerks_flashbang.png"},{"name":"Filp-Flop","url":"images/survivorPerks/IconPerks_flip-Flop.png"},{"name":"For the People","url":"images/survivorPerks/IconPerks_forThePeople.png"},{"name":"Head On","url":"images/survivorPerks/IconPerks_headOn.png"},{"name":"Hope","url":"images/survivorPerks/IconPerks_hope.png"},{"name":"Inner Strength","url":"images/survivorPerks/IconPerks_innerStrength.png"},{"name":"Iron Will","url":"images/survivorPerks/IconPerks_ironWill.png"},{"name":"Kindred","url":"images/survivorPerks/IconPerks_kindred.png"},{"name":"Leader","url":"images/survivorPerks/IconPerks_leader.png"},{"name":"Left Behind","url":"images/survivorPerks/IconPerks_leftBehind.png"},{"name":"Lightweight","url":"images/survivorPerks/IconPerks_lightweight.png"},{"name":"Lithe","url":"images/survivorPerks/IconPerks_lithe.png"},{"name":"Lucky Break","url":"images/survivorPerks/IconPerks_luckyBreak.png"},{"name":"Mettle of Man","url":"images/survivorPerks/IconPerks_mettleOfMan.png"},{"name":"No Mither","url":"images/survivorPerks/IconPerks_noMither.png"},{"name":"No One Left Behind","url":"images/survivorPerks/IconPerks_noOneLeftBehind.png"},{"name":"Object of Obsession","url":"images/survivorPerks/IconPerks_objectOfObsession.png"},{"name":"Off the Record","url":"images/survivorPerks/IconPerks_offTheRecord.png"},{"name":"Open-Handed","url":"images/survivorPerks/IconPerks_open-Handed.png"},{"name":"Pharmacy","url":"images/survivorPerks/IconPerks_pharmacy.png"},{"name":"Plunderer\'s Instinct","url":"images/survivorPerks/IconPerks_plunderersInstinct.png"},{"name":"Poised","url":"images/survivorPerks/IconPerks_poised.png"},{"name":"Power Struggle","url":"images/survivorPerks/IconPerks_powerStruggle.png"},{"name":"Premonition","url":"images/survivorPerks/IconPerks_premonition.png"},{"name":"Prove Thyself","url":"images/survivorPerks/IconPerks_proveThyself.png"},{"name":"Quick & Quiet","url":"images/survivorPerks/IconPerks_quickAndQuiet.png"},{"name":"Red Herring","url":"images/survivorPerks/IconPerks_redHerring.png"},{"name":"Repressed Alliance","url":"images/survivorPerks/IconPerks_repressedAlliance.png"},{"name":"Resilience","url":"images/survivorPerks/IconPerks_resilience.png"},{"name":"Resurgence","url":"images/survivorPerks/IconPerks_resurgence.png"},{"name":"Rookie Spirit","url":"images/survivorPerks/IconPerks_rookieSpirit.png"},{"name":"Saboteur","url":"images/survivorPerks/IconPerks_saboteur.png"},{"name":"Second Wind","url":"images/survivorPerks/IconPerks_secondWind.png"},{"name":"Self-Care","url":"images/survivorPerks/IconPerks_self-Care.png"},{"name":"Self-Preservation","url":"images/survivorPerks/IconPerks_self-Preservation.png"},{"name":"Slippery Meat","url":"images/survivorPerks/IconPerks_slipperyMeat.png"},{"name":"Small Game","url":"images/survivorPerks/IconPerks_smallGame.png"},{"name":"Smash Hit","url":"images/survivorPerks/IconPerks_smashHit.png"},{"name":"Sole Survivor","url":"images/survivorPerks/IconPerks_soleSurvivor.png"},{"name":"Solidarity","url":"images/survivorPerks/IconPerks_solidarity.png"},{"name":"Soul Guard","url":"images/survivorPerks/IconPerks_soulGuard.png"},{"name":"Spine Chill","url":"images/survivorPerks/IconPerks_spineChill.png"},{"name":"Sprint Burst","url":"images/survivorPerks/IconPerks_sprintBurst.png"},{"name":"Stake Out","url":"images/survivorPerks/IconPerks_stakeOut.png"},{"name":"Streetwise","url":"images/survivorPerks/IconPerks_streetwise.png"},{"name":"Technician","url":"images/survivorPerks/IconPerks_technician.png"},{"name":"Tenacity","url":"images/survivorPerks/IconPerks_tenacity.png"},{"name":"This Is Not Happening","url":"images/survivorPerks/IconPerks_thisIsNotHappening.png"},{"name":"Up the Ante","url":"images/survivorPerks/IconPerks_upTheAnte.png"},{"name":"Unbreakable","url":"images/survivorPerks/IconPerks_unbreakable.png"},{"name":"Urban Evasion","url":"images/survivorPerks/IconPerks_urbanEvasion.png"},{"name":"Vigil","url":"images/survivorPerks/IconPerks_vigil.png"},{"name":"Visionary","url":"images/survivorPerks/IconPerks_visionary.png"},{"name":"Wake Up!","url":"images/survivorPerks/IconPerks_wakeUp.png"},{"name":"We\'ll Make It","url":"images/survivorPerks/IconPerks_wellMakeIt.png"},{"name":"We\'re Gonna Live Forever","url":"images/survivorPerks/IconPerks_wereGonnaLiveForever.png"},{"name":"Windows of Opportunity","url":"images/survivorPerks/IconPerks_windowsOfOpportunity.png"}],"items":[{"name":"Alex\'s Toolbox","url":"images/survivorItems/Alex\'s_Toolbox.png"},{"name":"Broken Key","url":"images/survivorItems/Broken_Key.png"},{"name":"Camping Aid Kit","url":"images/survivorItems/Camping_Aid_Kit.png"},{"name":"Chinese Firecracker","url":"images/survivorItems/Chinese_Firecracker.png"},{"name":"Commodious Toolbox","url":"images/survivorItems/Commodious_Toolbox.png"},{"name":"Dull Key","url":"images/survivorItems/Dull_Key.png"},{"name":"Emergency Med-Kit","url":"images/survivorItems/Emergency_Med-Kit.png"},{"name":"Engineer\'s Toolbox","url":"images/survivorItems/Engineer\'s_Toolbox.png"},{"name":"First Aid Kit","url":"images/survivorItems/First_Aid_Kit.png"},{"name":"Flashlight","url":"images/survivorItems/Flashlight.png"},{"name":"Map","url":"images/survivorItems/Map.png"},{"name":"Mechanic\'s Toolbox","url":"images/survivorItems/Mechanic\'s_Toolbox.png"},{"name":"Rainbow Map","url":"images/survivorItems/Rainbow_Map.png"},{"name":"Ranger Med-Kit","url":"images/survivorItems/Ranger_Med-Kit.png"},{"name":"Skeleton Key","url":"images/survivorItems/Skeleton_Key.png"},{"name":"Sport Flashlight","url":"images/survivorItems/Sport_Flashlight.png"},{"name":"Toolbox","url":"images/survivorItems/Toolbox.png"},{"name":"Utility Flashlight","url":"images/survivorItems/Utility_Flashlight.png"},{"name":"Winter Party Starter","url":"images/survivorItems/Winter_Party_Starter.png"},{"name":"Worn-Out Tools","url":"images/survivorItems/Worn-Out_Tools.png"}],"addOns":[{"name":"Abdominal Dressing","url":"images/survivorAddon/Abdominal Dressing.png"},{"name":"Anti-Haemorrhagic Syringe","url":"images/survivorAddon/Anti-Haemorrhagic Syringe.png"},{"name":"Bandages","url":"images/survivorAddon/Bandages.png"},{"name":"Battery","url":"images/survivorAddon/Battery.png"},{"name":"Black Silk Cord","url":"images/survivorAddon/Black Silk Cord.png"},{"name":"Blood Amber","url":"images/survivorAddon/Blood Amber.png"},{"name":"Brand New Part","url":"images/survivorAddon/Brand New Part.png"},{"name":"Butterfly Tape","url":"images/survivorAddon/Butterfly Tape.png"},{"name":"Clean Rag","url":"images/survivorAddon/Clean Rag.png"},{"name":"Crystal Bead","url":"images/survivorAddon/Crystal Bead.png"},{"name":"Cutting Wire","url":"images/survivorAddon/Cutting Wire.png"},{"name":"Eroded Token","url":"images/survivorAddon/Eroded Token.png"},{"name":"Focus Lens","url":"images/survivorAddon/Focus Lens.png"},{"name":"Gauze Roll","url":"images/survivorAddon/Gauze Roll.png"},{"name":"Gel Dressings","url":"images/survivorAddon/Gel Dressings.png"},{"name":"Glass Bead","url":"images/survivorAddon/Glass Bead.png"},{"name":"Gold Token","url":"images/survivorAddon/Gold Token.png"},{"name":"Grip Wrench","url":"images/survivorAddon/Grip Wrench.png"},{"name":"Hacksaw","url":"images/survivorAddon/Hacksaw.png"},{"name":"Heavy Duty Battery","url":"images/survivorAddon/Heavy Duty Battery.png"},{"name":"High-End Sapphire Lens","url":"images/survivorAddon/High-End Sapphire Lens.png"},{"name":"Instructions","url":"images/survivorAddon/Instructions.png"},{"name":"Intense Halogen","url":"images/survivorAddon/Intense Halogen.png"},{"name":"Leather Grip","url":"images/survivorAddon/Leather Grip.png"},{"name":"Long Life Battery","url":"images/survivorAddon/Long Life Battery.png"},{"name":"Low Amp Filament","url":"images/survivorAddon/Low Amp Filament.png"},{"name":"Map Addendum","url":"images/survivorAddon/Map Addendum.png"},{"name":"Milky Glass","url":"images/survivorAddon/Milky Glass.png"},{"name":"Needle & Thread","url":"images/survivorAddon/Needle & Thread.png"},{"name":"Odd Bulb","url":"images/survivorAddon/Odd Bulb.png"},{"name":"Odd Stamp","url":"images/survivorAddon/Odd Stamp.png"},{"name":"Power Bulb","url":"images/survivorAddon/Power Bulb.png"},{"name":"Prayer Beads","url":"images/survivorAddon/Prayer Beads.png"},{"name":"Prayer Rope","url":"images/survivorAddon/Prayer Rope.png"},{"name":"Protective Gloves","url":"images/survivorAddon/Protective Gloves.png"},{"name":"Red Twine","url":"images/survivorAddon/Red Twine.png"},{"name":"Retardant Jelly","url":"images/survivorAddon/Retardant Jelly.png"},{"name":"Rubber Gloves","url":"images/survivorAddon/Rubber Gloves.png"},{"name":"Rubber Grip","url":"images/survivorAddon/Rubber Grip.png"},{"name":"Scraps","url":"images/survivorAddon/Scraps.png"},{"name":"Scratched Pearl","url":"images/survivorAddon/Scratched Pearl.png"},{"name":"Self Adherent Wrap","url":"images/survivorAddon/Self Adherent Wrap.png"},{"name":"Socket Swivels","url":"images/survivorAddon/Socket Swivels.png"},{"name":"Sponge","url":"images/survivorAddon/Sponge.png"},{"name":"Spring Clamp","url":"images/survivorAddon/Spring Clamp.png"},{"name":"Styptic Agent","url":"images/survivorAddon/Styptic Agent.png"},{"name":"Surgical Suture","url":"images/survivorAddon/Surgical Suture.png"},{"name":"Tir Optic","url":"images/survivorAddon/Tir Optic.png"},{"name":"Unusual Stamp","url":"images/survivorAddon/Unusual Stamp.png"},{"name":"Weaved Ring","url":"images/survivorAddon/Weaved Ring.png"},{"name":"Wide Lens","url":"images/survivorAddon/Wide Lens.png"},{"name":"Wire Spool","url":"images/survivorAddon/Wire Spool.png"},{"name":"Yellow Wire","url":"images/survivorAddon/Yellow Wire.png"}]}')}},[[26,1,2]]]);
//# sourceMappingURL=main.37c8b9bf.chunk.js.map