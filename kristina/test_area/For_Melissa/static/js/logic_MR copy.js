let state_names = ['ALABAMA','ALASKA','ARIZONA','ARKANSAS','CALIFORNIA','COLORADO','CONNECTICUT','DELAWARE','FLORIDA','GEORGIA','HAWAII','IDAHO','ILLINOIS','INDIANA','IOWA','KANSAS','KENTUCKY','LOUISIANA','MAINE','MARYLAND','MASSACHUSETTS','MICHIGAN','MINNESOTA','MISSISSIPPI','MISSOURI','MONTANA','NEBRASKA','NEVADA','NEW HAMPSHIRE','NEW JERSEY','NEW MEXICO','NEW YORK','NORTH CAROLINA','NORTH DAKOTA','OHIO','OKLAHOMA','OREGON','PENNSYLVANIA','RHODE ISLAND','SOUTH CAROLINA','SOUTH DAKOTA','TENNESSEE','TEXAS','UTAH','VERMONT','VIRGINIA','WASHINGTON','WEST VIRGINIA','WISCONSIN','WYOMING']


state_names.forEach(dropDownMenu2 => {
    d3.select("#selState")
    // option is the html element
    .append("option")
    .text(dropDownMenu2)
    .property("value", dropDownMenu2)
});

// listens for when there is a change to the selDataset, when there is a change then it runs function updateDisplay
d3.selectAll('#selState').on("change", handleState); 


function handleState() {
    // use this to prevent the page from refreshing... may or may not be necessary.
    d3.event.preventDefault();

    // select the value from the dropdown
    let selectedId2 = d3.select('#selState').node().value;

    //let selectedObj = whatever[selectedId] 
    console.log(selectedId2);

    // build your plots
    buildPlot(selectedId2);
};

function buildPlot(state) {
    // import fish with d3 and json and set dropdown menu to names array
        const url = "/api/v1.0/commo";
        d3.json(url).then(function(response_2) {

            let filteredData = response_2.filter (data => data.state == state);
            console.log(filteredData);

           
            let comod = filteredData.map(data => data.commodity)
            console.log(comod);

            let uniqueArray = Array.from(new Set(comod));
            console.log(uniqueArray)
            
            let data = []

            // create labels as []

            uniqueArray.forEach((commodity) => {
                console.log(commodity);
                let comodData = filteredData.filter (data => data.commodity === commodity);
                console.log(comodData);

                let x = comodData.map(data => data.count_colonies)
                console.log(x);

                let y = comodData.map(data => data.lbs_per_acre)
                console.log(y);

                let trace1 = {
                    x: x,
                    y: y,
                    type: 'scatter',
                    showlegend: false,
                    name: 
                  };
                
        
                data.push(trace1)

            });

            let layout = {
                title:'Crops by Colony Count',
                hovermode: "closest",
                hoverlabel: { bgcolor: "#FFF" },
                legend: {orientation: 'h'},
                xaxis: {
                    title: "Count of Colonies",
                },
                yaxis: {
                    title: "Pounds per Acre",
                }
            };
                
                
              
              Plotly.newPlot('linechart', data, layout);

        });
};

buildPlot('CALIFORNIA')
