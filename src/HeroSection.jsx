import React, { useState } from "react";
import InputField from "./InputField";

function HeroSection() {
  const [inival, SetInival] = useState("--");
  const [inivalHeart, SetInivalHeart] = useState("--");
  return (
    <>
      <div className="p-10 text-center">
        <div className="text-4xl sm:text-4xl lg:text-7xl font-semibold text-center">
          Check <span className="text-blue-500 font-bold">Glucose</span> level
          from your smart phone
        </div>

        <div className="">
          <img
            className="mx-auto mt-10 mix-blend-multiply"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX///9AQEA6Ojpzc3M9PT02NjYuLi4nJyczMzPS0tIwMDD7+/toaGhEREQ3NzcrKysgICDp6enz8/OHh4fY2Ninp6ebm5tQUFB8fHxubm5YWFi6urrg4OCRkZGysrLFxcUWFhZdXV3AwMBKSkr7HE87AAACdklEQVR4nO3cyXLiMBRAUUnIs40ZzByGkP//x0h2gNCQRVdwq577nqosQli8G2xFoiooBQAAAAAAAAAAAAAAAAAAAAAAAACAcMdZ6Al6tj/NQ4/Qs63Zhh6hX0Wt6yL0EL1qYh1noYfo1SLV0TL0EL0qrbar0EP0aZZorZNp6DF6dEhd4aAv05V1hdaGHqM/Way9fBd6kN6Upi0c7lpzrHUnP4QepScf9qvQmmHua5apvogGuf3O/DVqv77qY+hxXq8wrqzye5qy8rfi8I6JW7eOJtnaaLPO3M7GDG49HUVap3M1coUjNXd35LgMPdJrjdLuZesK2xc0HYUe6pU2LtBG02vh1N+UA0qcbSO/fDbqWqgav7BG24EsN1nkN2uT9mh/KVTZxD1mxkM47xfzxF2Rtu5aroXuz6N/ONmHnO0ldtZfocY23be3QtVY/9Km1TnccC+wW8V+B5O/X264b4Vq9u63cTbeim18W1Z5u0ub3A713wuV2iftz/Nq+RZiwN/J9lUcdfOvmtvD94Wq+eh+B1Fc7YUtOsvJuD0q2dTenQX/KFTqYNLuieOJrLdv1u1p3sTV4v4k+FCoioWOuyev/+WAvzYfa5PW5cMa8ljonDd1avRY1plxd8rLxZP3RZ8Wul3cYVOfhL218cN+7IdCpxC4nD7zc+FQUCgfhfJRKB+F8lEoH4XyUSgfhfJRKB+F8lEoH4XyUSgfhfJRKB+F8lEoH4XyUSgfhfJRKB+F8lEoH4XyUSgfhfJRKB+F8lEoH4XyUSgfhfJtXOEm9BC9ypI4EfaP939reh7y50ICAAAAAAAAAAAAAAAAAAAAAAAAAP4PnylqEobiQjYWAAAAAElFTkSuQmCC"
            alt="arrow up"
          />
        </div>

        <div className="flex justify-center items-center mt-10 p-3 font-semibold">
          <div className="text-3xl text-center">Swipe Up To See</div>
        </div>

        <div className="flex items-center justify-center mt-16">
          <div className=" w-4/5 sm:2/3 flex justify-center items-center gap-2 flex-col border-black border-4 p-4">
            <InputField name="Glucose Value" value={inival} unit="mg/dL" />
            <InputField name="Heart Rate" value={inivalHeart} unit="BPM" />
            <div className="flex gap-10 mt-2 ">
              <input
                type="button"
                className="bg-green-400 border-2 border-black p-2"
                value="Submit"
              />
              <input
                type="button"
                className="bg-red-400 border-2 border-black p-2"
                value="Reset"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
