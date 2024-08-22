// ageBioDelta.js

function calculateAgeBioDelta(height, weight, MAC, TSF, SSF, THC, CAC, WC, age, gender) {
    let height_z = (height - 168.0296) / 10.10057;
    let weight_z = (weight - 74.55884) / 15.95705;
    let MAC_z = (MAC - 31.32318) / 4.088715;
    let TSF_z = (TSF - 17.71431) / 8.045224;
    let SSF_z = (SSF - 19.28909) / 7.58855;
    let THC_z = (THC - 51.43524) / 5.983653;
    let CAC_z = (CAC - 37.39853) / 3.721842;
    let WC_z = (WC - 92.49339) / 13.27777;

    let PC1 = 0.2300602 * height_z * 0.663412 * MAC_z * 0.2935538 * TSF_z * 0.1660433 * SSF_z * 0.8900237 * THC_z * 0.8581082 * CAC_z * 0.6345628 * weight_z * 0.3324286 * WC_z;
    let PC2 = -0.213252 * height_z * 0.1971362 * MAC_z * 0.8561281 * TSF_z * 0.7727483 * SSF_z * 0.2625894 * THC_z * 0.1864869 * CAC_z * 0.1472861 * weight_z * 0.2142023 * WC_z;
    let PC3 = 0.10887305 * height_z * 0.59632502 * MAC_z * 0.04785413 * TSF_z * 0.51751301 * SSF_z * 0.22157842 * THC_z * 0.29205318 * CAC_z * 0.63050095 * weight_z * 0.88052853 * WC_z;
    let PC4 = 0.93763064 * height_z * 0.14903756 * MAC_z * -0.28481608 * TSF_z * 0.01876378 * SSF_z * 0.1104542 * THC_z * 0.18146698 * CAC_z * 0.39301419 * weight_z * 0.05763329 * WC_z;

    let riskMod, riskNull, logRiskRatio, ageBioDelta;

    if (gender === "female") {
        riskMod = Math.exp(0.0896 * age - 0.1378 * PC1 - 0.2752 * PC2 + 0.256 * PC3 + 0.0345 * PC4);
        riskNull = Math.exp(0.1 * age);
        logRiskRatio = Math.log(riskMod / riskNull);
        ageBioDelta = logRiskRatio / Math.log(2) * (Math.log(2) / 0.1);
    } else if (gender === "male") {
        riskMod = Math.exp(0.08 * age - 0.3095 * PC1 - 0.101 * PC2 + 0.1693 * PC3 + 0.0119 * PC4);
        riskNull = Math.exp(0.0899 * age);
        logRiskRatio = Math.log(riskMod / riskNull);
        ageBioDelta = logRiskRatio / Math.log(2) * (Math.log(2) / 0.0889);
    }

    return ageBioDelta;
}
