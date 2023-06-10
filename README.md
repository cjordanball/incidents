This app is a project created as a sample/challenge for Prominent Edge. It consists of two pieces, each contained in a separate directory, "front-end" and "back-end". The back-end contains a directory "data" which contains a separate .json file for each incident. **It is assumed that all incidents will be placed into this directory in the form presented in the problem (a single JSON object representation of an incident contained in each file.** The back-end code will combine the incidents contained in the data directory, obtain the weather data, merge that data into the already existing incident data, and deliver that data upon request to the front end.  The front end will take the data and display a single page containing a Google map and a list of all incidents.

The intended result is that, upon loading, no items in the list will be selected and the map will be centered on Richmond. Then the user can select any incident by clicking on it, which will result in that incident being highligted and a pin appearing on the map showing the location of the incident.

**NOTE**: The map currently displayed is not functioning very well and I am going to attempt to fix it before submitting. For example, the pin does not move with the map when zooming in or out.  Also, the map does not appear to redraw when a new incident is selected, it simply shows the same pin in the same place. Sorry for this - I have not recently worked with maps and made a somewhat random (and unfortunate) selection of a package to integrate Google maps into a ReactJS component.

## Installation
1. In each separate directory (i.e., front-end and back-end), run yarn install to install the necessary dependencies.
2. In the back-end directory, at the root level, create an ".env" file with the following contents: METEOSTAT_API_KEY=b504586bbfmshe38fb1705e4f33ap1bf324jsn0801aeb59dda
3. In the front-end directory, at the root level, create an ".env" file with the following contents: REACT_APP_MAP_API_KEY=AIzaSyDZvi1WUSm9b8-uai7u2O2MK1B5sUBjzfI
4. These keys will be discontinued in the near future, but please keep the repo private just to keep these keys safe.
5. In the back-end/data directory, place the JSON files for the incident reports as desired.
6. In the terminal, go to the root level of the back-end directory and run *yarn run start*, which should set up the server. You should see the log message "listening at http://localhost:3300" in the terminal.
7. Open a separate terminal tab, navigate to the root level of the front-end directory, and run *yarn run start*, then open a browswer tab (if it doesn't open automatically) to "localhost:3000". The Incident Report page should appear. 
