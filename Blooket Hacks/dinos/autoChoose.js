(() => {
    const cheat = (async () => {
        const { webpack } = webpackJsonp.push([[], { ['1234']: (_, a, b) => { a.webpack = b }, }, [['1234']]]),
            func = Object.values(webpack('74sb')).find(x => x.toString().includes('random') && x.toString().includes("includes")),
            getFossils = () => func([{ type: "fossil", val: 10, rate: .1, blook: "Amber" }, { type: "fossil", val: 25, rate: .1, blook: "Dino Egg" }, { type: "fossil", val: 50, rate: .175, blook: "Dino Fossil" }, { type: "fossil", val: 75, rate: .175, blook: "Stegosaurus" }, { type: "fossil", val: 100, rate: .15, blook: "Velociraptor" }, { type: "fossil", val: 125, rate: .125, blook: "Brontosaurus" }, { type: "fossil", val: 250, rate: .075, blook: "Triceratops" }, { type: "fossil", val: 500, rate: .025, blook: "Tyrannosaurus Rex" }, { type: "mult", val: 1.5, rate: .05 }, { type: "mult", val: 2, rate: .025 }], 3);
        
        try {
            let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
            if (stateNode.state.stage === "excavate") {
                stateNode.state.choices.length || (stateNode.state.choices = getFossils());
                let max = 0, index = -1;
                for (let i = 0; i < stateNode.state.choices.length; i++) {
                    const { type, val } = stateNode.state.choices[i];
                    const value = (type == "fossil" ? stateNode.state.fossils + val * stateNode.state.fossilMult : stateNode.state.fossils * val) || 0;
                    if (value <= max && type != "mult") continue;
                    max = value, index = i + 1;
                }
                document.querySelector('div[class^="styles__rockRow"] > div[role="button"]:nth-child(' + index + ')').click();
            }
        } catch { }
    });
       cheat(); // Directly call the cheat function without checking for updates
})();
