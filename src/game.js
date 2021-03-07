class StatValue {
    constructor(props) {
        this.name = props.name
        this.id = props.id
        this.value = props.value
        this.growthBase = props.growthBase
        this.growthMods = props.growthMods
    }
}
const initialStats = [new StatValue({name:"Population", id:1, value:50, growthBase:1, growthMods:[]}),
new StatValue({name:"Happiness", id:2, value:70, growthBase:0, growthMods:[]}),
new StatValue({name:"Food", id:3, value:200, growthBase:0, growthMods:[]}),
new StatValue({name:"Production", id:4, value:200, growthBase:0, growthMods:[]}),
new StatValue({name:"Housing", id:5, value:75, growthBase:0, growthMods:[]}),]


export default function Game () {
    var stats = initialStats
}