function showConverter(type) {
    const display = document.getElementById('converterDisplay');
    display.innerHTML = '';

    const template = (label, id, unitOptions, func) => `
        <h2>${label} Converter</h2>
        <input type='number' id='${id}Input' placeholder='Enter value'>
        <select id='${id}Unit'>
            ${unitOptions.map(([value, label]) => `<option value='${value}'>${label}</option>`).join('')}
        </select>
        <button onclick='${func}()'>Convert</button>
        <p id='${id}Result'></p>
    `;

    const converters = {
        temperature: template("Temperature", "temp", [["C", "Celsius"], ["F", "Fahrenheit"], ["K", "Kelvin"], ["R", "Rankine"]], "convertTemperature"),
        currency: template("Currency", "currency", [["usd", "USD"], ["eur", "EUR"], ["czk", "CZK"], ["gbp", "GBP"], ["jpy", "JPY"]], "convertCurrency"),
        length: template("Length", "length", [["m", "Meters"], ["km", "Kilometers"], ["mi", "Miles"], ["yd", "Yards"], ["ft", "Feet"], ["in", "Inches"]], "convertLength"),
        weight: template("Weight", "weight", [["kg", "Kilograms"], ["lbs", "Pounds"], ["g", "Grams"], ["oz", "Ounces"]], "convertWeight"),
        speed: template("Speed", "speed", [["kmh", "Km/h"], ["mph", "Mph"], ["ms", "m/s"], ["kn", "Knots"]], "convertSpeed"),
        time: template("Time", "time", [["h", "Hours"], ["min", "Minutes"], ["s", "Seconds"], ["ms", "Milliseconds"]], "convertTime"),
        data: template("Data", "data", [["b", "Bytes"], ["kb", "Kilobytes"], ["mb", "Megabytes"], ["gb", "Gigabytes"], ["tb", "Terabytes"]], "convertData"),
        angle: template("Angle", "angle", [["deg", "Degrees"], ["rad", "Radians"], ["grad", "Gradians"]], "convertAngle"),
        pressure: template("Pressure", "pressure", [["pa", "Pascals"], ["atm", "Atmospheres"], ["bar", "Bars"], ["psi", "PSI"]], "convertPressure"),
        energy: template("Energy", "energy", [["j", "Joules"], ["cal", "Calories"], ["kj", "Kilojoules"]], "convertEnergy"),
        power: template("Power", "power", [["w", "Watts"], ["kw", "Kilowatts"], ["hp", "Horsepower"]], "convertPower"),
        volume: template("Volume", "volume", [["l", "Liters"], ["ml", "Milliliters"], ["gal", "Gallons"], ["oz", "Ounces"]], "convertVolume"),
        area: template("Area", "area", [["sqm", "Square Meters"], ["sqkm", "Square Kilometers"], ["sqft", "Square Feet"], ["sqin", "Square Inches"]], "convertArea"),
        density: template("Density", "density", [["kgm3", "kg/m³"], ["gcm3", "g/cm³"]], "convertDensity"),
        fuel: template("Fuel Efficiency", "fuel", [["mpg", "Miles per gallon (US)"], ["kmpl", "Kilometers per liter"], ["l100km", "Liters per 100km"]], "convertFuel"),
        frequency: template("Frequency", "frequency", [["hz", "Hertz"], ["khz", "Kilohertz"], ["mhz", "Megahertz"], ["ghz", "Gigahertz"]], "convertFrequency"),
        force: template("Force", "force", [["n", "Newtons"], ["lbf", "Pound-force"]], "convertForce"),
        acceleration: template("Acceleration", "acceleration", [["ms2", "m/s²"], ["fts2", "ft/s²"]], "convertAcceleration"),
        torque: template("Torque", "torque", [["nm", "Newton Meters"], ["lbfft", "Pound-feet"]], "convertTorque"),
        illuminance: template("Illuminance", "illuminance", [["lx", "Lux"], ["fc", "Foot-candles"]], "convertIlluminance"),
        luminance: template("Luminance", "luminance", [["cdm2", "cd/m²"], ["nits", "Nits"]], "convertLuminance"),
        sound: template("Sound Level", "sound", [["db", "Decibels"], ["npl", "Noise Power Level"]], "convertSound"),
        magnetism: template("Magnetism", "magnetism", [["t", "Teslas"], ["mt", "Milliteslas"], ["ga", "Gauss"]], "convertMagnetism"),
        radiation: template("Radiation", "radiation", [["gy", "Gray"], ["sv", "Sievert"], ["rd", "Rad"]], "convertRadiation"),
        resistance: template("Resistance", "resistance", [["ohm", "Ohms"], ["kohm", "Kilo-ohms"], ["mohm", "Mega-ohms"]], "convertResistance"),
        capacitance: template("Capacitance", "capacitance", [["f", "Farads"], ["uf", "Microfarads"], ["nf", "Nanofarads"], ["pf", "Picofarads"]], "convertCapacitance"),
        voltage: template("Voltage", "voltage", [["v", "Volts"], ["mv", "Millivolts"], ["kv", "Kilovolts"]], "convertVoltage"),
        current: template("Current", "current", [["a", "Amperes"], ["ma", "Milliamperes"], ["ka", "Kiloamperes"]], "convertCurrent"),
        conductance: template("Conductance", "conductance", [["s", "Siemens"], ["ms", "Millisimens"]], "convertConductance"),
        charge: template("Charge", "charge", [["c", "Coulombs"], ["mc", "Millicoulombs"], ["uc", "Microcoulombs"]], "convertCharge"),
        entropy: template("Entropy", "entropy", [["jk", "J/K"], ["calk", "Cal/K"]], "convertEntropy")
    };

    display.innerHTML = converters[type] || `<p>Converter for "${type}" not available yet.</p>`;
}

const temperatureButton = document.getElementById('temperature');
const currencyButton = document.getElementById('currency');
const lengthButton = document.getElementById('length');
const weightButton = document.getElementById('weight');
const speedButton = document.getElementById('speed');
const timeButton = document.getElementById('time');
const dataButton = document.getElementById('data');
const angleButton = document.getElementById('angle');
const pressureButton = document.getElementById('pressure');
const energyButton = document.getElementById('energy');
const powerButton = document.getElementById('power');
const volumeButton = document.getElementById('volume');
const areaButton = document.getElementById('area');
const densityButton = document.getElementById('density');
const fuelButton = document.getElementById('fuel');
const frequencyButton = document.getElementById('frequency');
const forceButton = document.getElementById('force');
const accelerationButton = document.getElementById('acceleration');
const torqueButton = document.getElementById('torque');
const illuminanceButton = document.getElementById('illuminance');
const luminanceButton = document.getElementById('luminance');
const soundButton = document.getElementById('sound');
const magnetismButton = document.getElementById('magnetism');
const radiationButton = document.getElementById('radiation');
const resistanceButton = document.getElementById('resistance');
const capacitanceButton = document.getElementById('capacitance');
const voltageButton = document.getElementById('voltage');
const currentButton = document.getElementById('current');
const conductanceButton = document.getElementById('conductance');
const chargeButton = document.getElementById('charge');
const entropyButton = document.getElementById('entropy');

temperatureButton.addEventListener('click', () => showConverter('temperature'));
currencyButton.addEventListener('click', () => showConverter('currency'));
lengthButton.addEventListener('click', () => showConverter('length'));
weightButton.addEventListener('click', () => showConverter('weight'));
speedButton.addEventListener('click', () => showConverter('speed'));
timeButton.addEventListener('click', () => showConverter('time'));
dataButton.addEventListener('click', () => showConverter('data'));
angleButton.addEventListener('click', () => showConverter('angle'));
pressureButton.addEventListener('click', () => showConverter('pressure'));
energyButton.addEventListener('click', () => showConverter('energy'));
powerButton.addEventListener('click', () => showConverter('power'));
volumeButton.addEventListener('click', () => showConverter('volume'));
areaButton.addEventListener('click', () => showConverter('area'));
densityButton.addEventListener('click', () => showConverter('density'));
fuelButton.addEventListener('click', () => showConverter('fuel'));
frequencyButton.addEventListener('click', () => showConverter('frequency'));
forceButton.addEventListener('click', () => showConverter('force'));
accelerationButton.addEventListener('click', () => showConverter('acceleration'));
torqueButton.addEventListener('click', () => showConverter('torque'));
illuminanceButton.addEventListener('click', () => showConverter('illuminance'));
luminanceButton.addEventListener('click', () => showConverter('luminance'));
soundButton.addEventListener('click', () => showConverter('sound'));
magnetismButton.addEventListener('click', () => showConverter('magnetism'));
radiationButton.addEventListener('click', () => showConverter('radiation'));
resistanceButton.addEventListener('click', () => showConverter('resistance'));
capacitanceButton.addEventListener('click', () => showConverter('capacitance'));
voltageButton.addEventListener('click', () => showConverter('voltage'));
currentButton.addEventListener('click', () => showConverter('current'));
conductanceButton.addEventListener('click', () => showConverter('conductance'));
chargeButton.addEventListener('click', () => showConverter('charge'));
entropyButton.addEventListener('click', () => showConverter('entropy'));

function convertTemperature() {
    let input = parseFloat(document.getElementById('tempInput').value);
    let unit = document.getElementById('tempUnit').value;
    let result = document.getElementById('tempResult');
    let c;
    if (unit === 'C') c = input;
    else if (unit === 'F') c = (input - 32) * 5 / 9;
    else if (unit === 'K') c = input - 273.15;
    else if (unit === 'R') c = (input - 491.67) * 5 / 9;

    const f = (c * 9 / 5 + 32).toFixed(2);
    const k = (c + 273.15).toFixed(2);
    const r = ((c + 273.15) * 9 / 5).toFixed(2);
    result.innerText = `${c.toFixed(2)} °C = ${f} °F = ${k} K = ${r} °R`;
}

function convertCurrency() {
    let input = parseFloat(document.getElementById('currencyInput').value);
    let unit = document.getElementById('currencyUnit').value;
    let result = document.getElementById('currencyResult');
    const rates = {
        usd: 1,
        eur: 0.9,
        czk: 22,
        gbp: 0.8,
        jpy: 130
    };
    let usd = input / rates[unit];
    let output = Object.keys(rates).map(u => `${(usd * rates[u]).toFixed(2)} ${u.toUpperCase()}`).join(" | ");
    result.innerText = output;
}

function convertLength() {
    let input = parseFloat(document.getElementById('lengthInput').value);
    let unit = document.getElementById('lengthUnit').value;
    let result = document.getElementById('lengthResult');
    const m = {
        m: 1,
        km: 1000,
        mi: 1609.34,
        yd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    };
    let meters = input * m[unit];
    let output = Object.entries(m).map(([u, val]) => `${(meters / val).toFixed(4)} ${u}`).join(" | ");
    result.innerText = output;
}

function convertWeight() {
    let input = parseFloat(document.getElementById('weightInput').value);
    let unit = document.getElementById('weightUnit').value;
    let result = document.getElementById('weightResult');
    const kg = {
        kg: 1,
        lbs: 0.453592,
        g: 0.001,
        oz: 0.0283495
    };
    let base = input * kg[unit];
    let output = Object.entries(kg).map(([u, val]) => `${(base / val).toFixed(4)} ${u}`).join(" | ");
    result.innerText = output;
}

function convertSpeed() {
    let input = parseFloat(document.getElementById('speedInput').value);
    let unit = document.getElementById('speedUnit').value;
    let result = document.getElementById('speedResult');
    const ms = {
        kmh: 1 / 3.6,
        mph: 0.44704,
        ms: 1,
        kn: 0.514444
    };
    let base = input * ms[unit];
    let output = Object.entries(ms).map(([u, val]) => `${(base / val).toFixed(4)} ${u}`).join(" | ");
    result.innerText = output;
}

function convertTime() {
    let input = parseFloat(document.getElementById('timeInput').value);
    let unit = document.getElementById('timeUnit').value;
    let result = document.getElementById('timeResult');
    const sec = {
        h: 3600,
        min: 60,
        s: 1,
        ms: 0.001
    };
    let base = input * sec[unit];
    let output = Object.entries(sec).map(([u, val]) => `${(base / val).toFixed(4)} ${u}`).join(" | ");
    result.innerText = output;
}

function convertData() {
    let input = parseFloat(document.getElementById('dataInput').value);
    let unit = document.getElementById('dataUnit').value;
    let result = document.getElementById('dataResult');
    const b = {
        b: 1,
        kb: 1024,
        mb: 1024 ** 2,
        gb: 1024 ** 3,
        tb: 1024 ** 4
    };
    let base = input * b[unit];
    let output = Object.entries(b).map(([u, val]) => `${(base / val).toFixed(4)} ${u}`).join(" | ");
    result.innerText = output;
}

function convertAngle() {
    let input = parseFloat(document.getElementById('angleInput').value);
    let unit = document.getElementById('angleUnit').value;
    let result = document.getElementById('angleResult');
    const rad = {
        deg: Math.PI / 180,
        rad: 1,
        grad: Math.PI / 200
    };
    let base = input * rad[unit];
    let output = Object.entries(rad).map(([u, val]) => `${(base / val).toFixed(4)} ${u}`).join(" | ");
    result.innerText = output;
}

function convertPressure() {
    let input = parseFloat(document.getElementById('pressureInput').value);
    let unit = document.getElementById('pressureUnit').value;
    let result = document.getElementById('pressureResult');
    const pa = {
        pa: 1,
        bar: 1e5,
        atm: 101325,
        psi: 6894.76,
        mmHg: 133.322
    };
    let base = input * pa[unit];
    let output = Object.entries(pa).map(([u, val]) => `${(base / val).toFixed(2)} ${u}`).join(" | ");
    result.innerText = output;
}

function convertEnergy() {
    let input = parseFloat(document.getElementById('energyInput').value);
    let unit = document.getElementById('energyUnit').value;
    let result = document.getElementById('energyResult');
    const joule = {
        j: 1,
        cal: 4.184,
        kj: 1000,
        btu: 1055.06,
        wh: 3600,
        ev: 1.60218e-19
    };
    let base = input * joule[unit];
    let output = Object.entries(joule).map(([u, val]) => `${(base / val).toFixed(2)} ${u}`).join(" | ");
    result.innerText = output;
}

function convertPower() {
    let input = parseFloat(document.getElementById('powerInput').value);
    let unit = document.getElementById('powerUnit').value;
    let result = document.getElementById('powerResult');
    const watt = {
        w: 1,
        hp: 745.7,
        kw: 1000,
        btu_h: 0.293071,
        joule_s: 1
    };
    let base = input * watt[unit];
    let output = Object.entries(watt).map(([u, val]) => `${(base / val).toFixed(2)} ${u}`).join(" | ");
    result.innerText = output;
}

function convertVolume() {
    let input = parseFloat(document.getElementById('volumeInput').value);
    let unit = document.getElementById('volumeUnit').value;
    let result = document.getElementById('volumeResult');
    const l = {
        l: 1,
        ml: 0.001,
        gal: 3.78541,
        qt: 0.946353,
        pt: 0.473176,
        cup: 0.24,
        oz: 0.0295735
    };
    let base = input * l[unit];
    let output = Object.entries(l).map(([u, val]) => `${(base / val).toFixed(2)} ${u}`).join(" | ");
    result.innerText = output;
}

function convertArea() {
    let input = parseFloat(document.getElementById('areaInput').value);
    let unit = document.getElementById('areaUnit').value;
    let result = document.getElementById('areaResult');
    const m2 = {
        sqm: 1,
        sqkm: 1e6,
        sqft: 0.092903,
        sqyd: 0.836127,
        sqin: 0.00064516,
        ac: 4046.86
    };
    let base = input * m2[unit];
    let output = Object.entries(m2).map(([u, val]) => `${(base / val).toFixed(2)} ${u}`).join(" | ");
    result.innerText = output;
}

function convertDensity() {
    let input = parseFloat(document.getElementById('densityInput').value);
    let unit = document.getElementById('densityUnit').value;
    let result = document.getElementById('densityResult');
    const kgm3 = {
        kgm3: 1,
        gcm3: 1000,
        lbft3: 16.0185,
        ozin3: 0.578034,
        tonft3: 0.453592
    };
    let base = input * kgm3[unit];
    let output = Object.entries(kgm3).map(([u, val]) => `${(base / val).toFixed(2)} ${u}`).join(" | ");
    result.innerText = output;
}

function convertFuel() {
    let input = parseFloat(document.getElementById('fuelInput').value);
    let unit = document.getElementById('fuelUnit').value;
    let result = document.getElementById('fuelResult');
    const l100km = {
        l100km: 1,
        mpg: 235.214,
        kmpl: 10,
        miL: 14.7037
    };
    let base = input * l100km[unit];
    let output = Object.entries(l100km).map(([u, val]) => `${(base / val).toFixed(2)} ${u}`).join(" | ");
    result.innerText = output;
}

function convertFrequency() {
    let input = parseFloat(document.getElementById('frequencyInput').value);
    let unit = document.getElementById('frequencyUnit').value;
    let result = document.getElementById('frequencyResult');
    const hz = {
        hz: 1,
        khz: 1000,
        mhz: 1e6,
        ghz: 1e9
    };
    let base = input * hz[unit];
    let output = Object.entries(hz).map(([u, val]) => `${(base / val).toFixed(2)} ${u}`).join(" | ");
    result.innerText = output;
}

function convertForce() {
    let input = parseFloat(document.getElementById('forceInput').value);
    let unit = document.getElementById('forceUnit').value;
    let result = document.getElementById('forceResult');
    const newton = {
        n: 1,
        dyn: 1e-5,
        lbf: 4.44822,
        kgf: 9.80665
    };
    let base = input * newton[unit];
    let output = Object.entries(newton).map(([u, val]) => `${(base / val).toFixed(2)} ${u}`).join(" | ");
    result.innerText = output;
}

function convertAcceleration() {
    let input = parseFloat(document.getElementById('accelerationInput').value);
    let unit = document.getElementById('accelerationUnit').value;
    let result = document.getElementById('accelerationResult');
    const mps2 = {
        ms2: 1,
        g: 9.80665,
        fts2: 3.28084
    };
    let base = input * mps2[unit];
    let output = Object.entries(mps2).map(([u, val]) => `${(base / val).toFixed(2)} ${u}`).join(" | ");
    result.innerText = output;
}

function convertTorque() {
    let input = parseFloat(document.getElementById('torqueInput').value);
    let unit = document.getElementById('torqueUnit').value;
    let result = document.getElementById('torqueResult');
    const nm = {
        nm: 1,
        lbfft: 1.35582,
        inlb: 0.113,
        kgm: 9.80665
    };
    let base = input * nm[unit];
    let output = Object.entries(nm).map(([u, val]) => `${(base / val).toFixed(2)} ${u}`).join(" | ");
    result.innerText = output;
}

function convertIlluminance() {
    let input = parseFloat(document.getElementById('illuminanceInput').value);
    let unit = document.getElementById('illuminanceUnit').value;
    let result = document.getElementById('illuminanceResult');

    let lux, fc;
    if (unit === 'lx') {
        lux = input;
        fc = lux * 0.092903;
    } else if (unit === 'fc') {
        fc = input;
        lux = fc * 10.764;
    }

    result.innerText = `${lux.toFixed(2)} Lux = ${fc.toFixed(2)} Foot-candles`;
}

function convertLuminance() {
    let input = parseFloat(document.getElementById('luminanceInput').value);
    let unit = document.getElementById('luminanceUnit').value;
    let result = document.getElementById('luminanceResult');

    let cdm2 = input;
    let nits = cdm2;

    result.innerText = `${cdm2.toFixed(2)} cd/m² = ${nits.toFixed(2)} Nits`;
}

function convertSound() {
    let input = parseFloat(document.getElementById('soundInput').value);
    let unit = document.getElementById('soundUnit').value;
    let result = document.getElementById('soundResult');

    let db, npl;
    if (unit === 'db') {
        db = input;
        npl = db;
    } else if (unit === 'npl') {
        npl = input;
        db = npl;
    }

    result.innerText = `${db.toFixed(2)} dB = ${npl.toFixed(2)} NPL`;
}

function convertMagnetism() {
    let input = parseFloat(document.getElementById('magnetismInput').value);
    let unit = document.getElementById('magnetismUnit').value;
    let result = document.getElementById('magnetismResult');

    let t, mt, g;
    if (unit === 't') {
        t = input;
        mt = t * 1000;
        g = t * 10000;
    } else if (unit === 'mt') {
        mt = input;
        t = mt / 1000;
        g = mt * 10;
    } else if (unit === 'ga') {
        g = input;
        t = g / 10000;
        mt = g / 10;
    }

    result.innerText = `${t.toFixed(4)} Tesla = ${mt.toFixed(4)} Milliteslas = ${g.toFixed(4)} Gauss`;
}

function convertRadiation() {
    let input = parseFloat(document.getElementById('radiationInput').value);
    let unit = document.getElementById('radiationUnit').value;
    let result = document.getElementById('radiationResult');

    let gy, sv, rd;
    if (unit === 'gy') {
        gy = input;
        sv = gy;
        rd = gy;
    } else if (unit === 'sv') {
        sv = input;
        gy = sv;
        rd = sv;
    } else if (unit === 'rd') {
        rd = input;
        gy = rd;
        sv = rd;
    }

    result.innerText = `${gy.toFixed(4)} Gray = ${sv.toFixed(4)} Sievert = ${rd.toFixed(4)} Rad`;
}

function convertResistance() {
    let input = parseFloat(document.getElementById('resistanceInput').value);
    let unit = document.getElementById('resistanceUnit').value;
    let result = document.getElementById('resistanceResult');

    const ohm = {
        ohm: 1,
        kohm: 1000,
        mohm: 1000000
    };

    let base = input * ohm[unit];
    let output = Object.entries(ohm).map(([u, val]) => `${(base / val).toFixed(4)} ${u}`).join(" | ");
    result.innerText = output;
}

function convertCapacitance() {
    let input = parseFloat(document.getElementById('capacitanceInput').value);
    let unit = document.getElementById('capacitanceUnit').value;
    let result = document.getElementById('capacitanceResult');

    const f = {
        f: 1,
        uf: 1000000,
        nf: 1000000000,
        pf: 1000000000000
    };

    let base = input * f[unit];
    let output = Object.entries(f).map(([u, val]) => `${(base / val).toFixed(4)} ${u}`).join(" | ");
    result.innerText = output;
}

function convertVoltage() {
    let input = parseFloat(document.getElementById('voltageInput').value);
    let unit = document.getElementById('voltageUnit').value;
    let result = document.getElementById('voltageResult');

    const v = {
        v: 1,
        mv: 0.001,
        kv: 1000
    };

    let base = input * v[unit];
    let output = Object.entries(v).map(([u, val]) => `${(base / val).toFixed(4)} ${u}`).join(" | ");
    result.innerText = output;
}

function convertCurrent() {
    let input = parseFloat(document.getElementById('currentInput').value);
    let unit = document.getElementById('currentUnit').value;
    let result = document.getElementById('currentResult');

    const a = {
        a: 1,
        ma: 0.001,
        ka: 1000
    };

    let base = input * a[unit];
    let output = Object.entries(a).map(([u, val]) => `${(base / val).toFixed(4)} ${u}`).join(" | ");
    result.innerText = output;
}

function convertConductance() {
    let input = parseFloat(document.getElementById('conductanceInput').value);
    let unit = document.getElementById('conductanceUnit').value;
    let result = document.getElementById('conductanceResult');

    const s = {
        s: 1,
        ms: 0.001
    };

    let base = input * s[unit];
    let output = Object.entries(s).map(([u, val]) => `${(base / val).toFixed(4)} ${u}`).join(" | ");
    result.innerText = output;
}

function convertCharge() {
    let input = parseFloat(document.getElementById('chargeInput').value);
    let unit = document.getElementById('chargeUnit').value;
    let result = document.getElementById('chargeResult');

    const c = {
        c: 1,
        mc: 0.001,
        uc: 0.000001
    };

    let base = input * c[unit];
    let output = Object.entries(c).map(([u, val]) => `${(base / val).toFixed(4)} ${u}`).join(" | ");
    result.innerText = output;
}

function convertEntropy() {
    let input = parseFloat(document.getElementById('entropyInput').value);
    let unit = document.getElementById('entropyUnit').value;
    let result = document.getElementById('entropyResult');

    const jk = {
        jk: 1,
        calk: 4.184
    };

    let base = input * jk[unit];
    let output = Object.entries(jk).map(([u, val]) => `${(base / val).toFixed(4)} ${u}`).join(" | ");
    result.innerText = output;
}
