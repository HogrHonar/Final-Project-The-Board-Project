import Team from "./Team";
import roqayaamjad from '../imgs/roqayaamjad.jpeg';
import hogerhonar from '../imgs/hogrhonar.jpeg';
import daryanaji from '../imgs/daryanaji.jpeg';
import ramyaromed from '../imgs/ramyaromed.PNG';

export default function About(){
    return (
        <div className="about-text">
            <h1> About Page</h1>
            <p>'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                Aenean commodo ligula eget dolor. Aenean massa. 
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, 
                venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                 Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                  consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. 
                  Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. 
                  Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
                   sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, 
                   hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.
                   Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
                    Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,'
            </p>
            <h2>Our Team</h2>
            <div className="team-details">
                <Team image={roqayaamjad} githubLink="https://github.com/rokayaamjaad"  name="Roqaya Amjad"/>
                <Team image={hogerhonar} githubLink="https://github.com/HogrHonar"  name="Hogr Honar"/>
                <Team image={daryanaji} githubLink="https://github.com/daryanaji"  name="Darya Naji"/>
                <Team image={ramyaromed} githubLink="https://github.com/ramagitup"  name="Ramyar Omed"/>

            </div>
            

        </div>
        
    );
}