import React, { useState, useRef, useEffect } from 'react';
import './sass/App.scss';
import './sass/styles.scss';


function App() {

  // These are commented out because I'm not using them here yet
  // const apiUrl = import.meta.env.VITE_API_URL; // after eslint was running I needed to add a application variable "VITE_API_URL" to App.jsx because the serviceWorker.jsx file function was using an undefined variable 'isLocalhost' in conditional logic causing the build to fail. Creating this application variable in the App.jsx file and using it within new conditional logic in the serviceWorker.jsx file provided the ability to do the validate/check for 'development' vs. 'production' and fixed the build issue eslint was complaining about.

  // const rootUrl = import.meta.env.VITE_ROOT_URL;
  // const publicUrl = import.meta.env.VITE_PUBLIC_URL;

  // const appName = import.meta.env.VITE_APP_NAME;

  const [flierOptions] = useState([
    {
      id: 'radio1',
      value: true,
      label: 'Yes'
    },
    {
      id: 'radio2',
      value: false,
      label: 'No'
    }
  ]);

  const [destinationOptions, setDestinationOptions] = useState([
    {
      id: 'cbx1',
      value: 'lower48',
      label: 'Lower 48',
      checked: false
    },
    {
      id: 'cbx2',
      value: 'Alaska',
      label: 'Alaksa',
      checked: false
    },
    {
      id: 'cbx3',
      value: 'Hawaii',
      label: 'Hawaii',
      checked: false
    },
    {
      id: 'cbx4',
      value: 'Canada',
      label: 'Canada',
      checked: false
    },
    {
      id: 'cbx5',
      value: 'Mexico',
      label: 'Mexico',
      checked: false
    }
  ]);

  const [fName, setfName] = useState();
  const [lName, setlName] = useState();
  const [flier, setFlier] = useState(null);
  const [destinations, setDestinations] = useState([]);

  let {...destinatationElAttrs} = {}

  if (!flier) {
    destinatationElAttrs = {
      ...destinatationElAttrs,
      hidden: true
    }
  }

  let {...submitElAttrs} = {}

  if (!fName || !lName || flier === null) {
    submitElAttrs = {
      ...submitElAttrs,
      disabled: true
    }
  }

  // Because the change event from auro-checkbox and auro-radio is a custom event, onChange does not pick it up
  // due to React's synthetic event system
  // We need to add the event listener using a ref instead
  // If you do not need to support IE, you can listen to the input event inline instead of using a ref.

  const flierGroupEl = useRef(null);
  useEffect(() => {
    const flierGroup = flierGroupEl.current;
    flierGroup.addEventListener('change', handleFlierChange);
    return function cleanup() {
      flierGroup.removeEventListener('change', handleFlierChange);
    };
  });

  const destinationsGroupEl = useRef(null);
  useEffect(() => {
    const destinationGroup = destinationsGroupEl.current;
    destinationGroup.addEventListener('change', handleDestinationChange);
    return function cleanup() {
      destinationGroup.removeEventListener('change', handleDestinationChange);
    };
  });

  const handleFlierChange = (e) => {
    const { target } = e;
    const value = (target.value === 'true')

    setFlier(value);
  }

  const handleDestinationChange = (e) => {
    const { target } = e;

    let updatedDestinationOptions = destinationOptions.map(
      option => option.value === target.value  ?
        { ...option, checked: target.checked } : option);
    setDestinationOptions(updatedDestinationOptions);

    let visitedDestinations = updatedDestinationOptions
      .filter((option) => option.checked)
      .map((option) => option.value)

    setDestinations(visitedDestinations);
  }

  const getFormData = () => {
    const formData = {
      fName,
      lName
    }

    if (flier !== null) {
      formData.flier = flier;
    }

    if (flier && destinations.length > 0) {
      formData.destinations = destinations
    }

    return formData;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = getFormData();

    console.warn('Form JSON Data:', formData);
    alert(`Form JSON Data: ` + JSON.stringify(formData));
  }


  return (
    <main>
      <auro-header display="display">

        {/* TODO:
            -Create a custom Hero component for this header content
        */}
        Auro Demo v3 [Vite/React v19 build]: migrated and maintained by Jenny M.

        <section>

          {/* TODO:
            -Build in a manual way to test a "loaded" script, (init load script directly), then provide a way to exit/terminate it on demand.

            -Create page, nav, menu, hero, button, icon, section CSS transitions with animated Svg's, use Lottie, and Greensock to bring UI to life.

            -Sprinkle the UI with new ways of using style patterns, gradients, shadows, transparencies to reate context by proximity, size, color, shading, spacing etc.

            -Load a different random page background or hero image every time the home page is loaded, the images must be referenced from a public api

            -Use the "Auor Skeleton, Auro Menu, Auro Nav, Auro Hyperlink, Auro Icon, Auro Loader, "
          */}

            <h1 className="heading heading--700">
              Auro Demo v3 uses the Alaska Airlines's open source Auro Design System
            </h1>

          {/* TODO:
            -Create a custom web component for "Wording emphasis blocks" to make certain word in a h1 or h2 heading stand out with multiple different colors, and/or font styles
          */}

            <h2 className="heading heading--400">The Auro Design System features Design Tokens and Atomic UI based WACG compliant Web Components</h2>
            <auro-button onClick={() => alert('clicked!')}>Click for Dialog Message</auro-button>
        </section>

      </auro-header>

      {/* <auro-widget audience="powered by Auro"></auro-widget> */}

      <form className="formWrapper surveyIntro">
        {/* Required inputs */}
        <auro-input name="firstName" bordered required value={fName} onInput={(e) => setfName(e.target.value) }>
          <span slot="label">First Name</span>
        </auro-input>
        <auro-input name="lastName" bordered required value={lName} onInput={(e) => setlName(e.target.value) }>
          <span slot="label">Last Name</span>
        </auro-input>

        <br />

        {/* Required radio button options */}
        <auro-radio-group ref={flierGroupEl} required>
          <span slot="legend">
            Have you ever flown with Alaska Air?
          </span>
          {flierOptions.map((option) => (
            <auro-radio
              key={option.id}
              id={option.id}
              label={option.label}
              name={option.id}
              value={option.value}
              checked={option.checked || undefined}>
            </auro-radio>
          ))}
        </auro-radio-group>

        {/* Required checkbox options */}
        <auro-checkbox-group ref={destinationsGroupEl} {...destinatationElAttrs}>
          <span slot="legend">
            What destinations have you traveled to?
          </span>
          {destinationOptions.map((option) => (
            <auro-checkbox
              key={option.id}
              id={option.id}
              name="cbxDemo"
              value={option.value}
              checked={option.checked || undefined}>
              {option.label}
            </auro-checkbox>
          ))}
        </auro-checkbox-group>

        {/* Submit button is not active until all requirements are meet */}
        <auro-button type="submit" onClick={handleSubmit} {...submitElAttrs}>Submit</auro-button>
      </form>

      <br />

      {/* Visual of data entered */}
      <div className="formDataWrapper">
        Form Data: {JSON.stringify(getFormData())}
      </div>

      <auro-footer display="display">

        <section>
          {/* TODO:
            -Create a custom footer with social profile links, and demo relevant external portfolio projects etc.
          */}
            <div className="footer">
              <div className="footer--400">
              &#169; 2025 by Jenny@Eye-4Design
                ~ 100% WCAG compliance requires a human review process ~
                All rights reserved.
              </div>
            </div>
        </section>

      </auro-footer>
    </main>
  );
}

export default App;
