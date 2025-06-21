import { OrbitingCircles } from "./OrbitingCircles";

export function FrameWorks() {

    const skills=["html5","css3","javascript","tailwindcss","vitejs","react","redux","vue","next","git","github","mongo"]

  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles iconSize={40}>
      {skills.map((skill,index)=>(
        <Icon key={index} src={`assets/logos/html5.svg`}/>
      ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
      {skills.map((skill,index)=>(
        <Icon key={index} src={`assets/logos/html5.svg`}/>
      ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon=({src})=>{
    <img src={src} className="duration-200 rounded-sm hover:scale-110"/>
}

