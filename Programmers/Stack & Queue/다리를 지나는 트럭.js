function solution(bridge_length, weight, truck_weights) {
    let answer = 1;
    let bridge = new Array(bridge_length - 1).fill(0);
    let waitTruck = truck_weights.shift();

    bridge.push(waitTruck);
    let bridgeWeight = waitTruck;

    while (bridgeWeight) {
        bridgeWeight -= bridge.shift();
        waitTruck = truck_weights[0];

        if (bridgeWeight + waitTruck <= weight) {
            truck_weights.shift();
            bridge.push(waitTruck);

            bridgeWeight += waitTruck;
        } else {
            bridge.push(0);
        }
        answer++;

    }
    return answer;
}