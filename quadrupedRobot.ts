//% color="#49cade" weight=10 icon="\u07DD" block="Dino Robot"
namespace QuadrupedRobot{
    export enum TurnChoice {
        //% block=Left
        Left = '7',
        //% block=Right
        Right  = '9'
    }

    export enum MoveChoice {
        //% block=Forward
        Forward = '8',
        //% block=Back
        Back  = '2',
        //% block=Left
        Left = '4',
        //% block=Right
        Right = '6'
    }

    export enum StayChoice {
        //% block=Stand
        Stand = '5',
        //% block=Lie
        Lie = 'a'
    }

    export enum ActionChoice {
        //% block=SayHi
        SayHi = 's',
        //% block=Fight
        Fight = 'd',
        //% block=PushUp
        PushUp = 'f'
    }

    export enum DanceChoice {
        //% block=Dance1
        Dance1 = 'z',
        //% block=Dance2
        Dance2 = 'x',
        //% block=Dance3
        Dance3 = 'c'
    }
    
    /**
     * init serial port
     * Tx pin: SerialPin.P1
     * Rx pin: SerialPin.P2
     **/
    //% blockId=dinoai_init block="Dino Quadruped Robot Init"
    //% weight=100
    export function dinoaiInit(): void {
        serial.redirect(SerialPin.P1, SerialPin.P2, BaudRate.BaudRate9600)
        basic.pause(100)
    }

    //% blockId=turnblock block="Turn %turn"
    //% weight=99 blockGap=40
    export function turnblock(turn:TurnChoice): void {
        let str = `R ${turn}`
        serial.writeLine(str)
    }

    //% blockId=moveblock block="Move %move"
    //% weight=98 blockGap=40
    export function moveblock(move:MoveChoice): void {
        let str = `R ${move}`
        serial.writeLine(str)
    }

    //% blockId=stayblock block="Stay %stay"
    //% weight=97 blockGap=40
    export function stayblock(stay:StayChoice): void {
        let str = `R ${stay}`
        serial.writeLine(str)
    }

    //% blockId=sleepblock block="Robot Sleep"
    //% weight=96 blockGap=40
    export function sleepblock(): void {
        let str = `R g`
        serial.writeLine(str)
    }

    //% blockId=actionblock block="Set Action %action"
    //% weight=95 blockGap=40
    export function actionblock(action:ActionChoice): void {
        let str = `R ${action}`
        serial.writeLine(str)
    }

    //% blockId=danceblock block="Dance %dance"
    //% weight=94 blockGap=40
    export function danceblock(dance:DanceChoice): void {
        let str = `R ${dance}`
        serial.writeLine(str)
    }
}