var mongoose = require('mongoose');

var projectSchema = new mongoose.Schema(
	{
		rcmProjectId: {type: Number, required: true},
		name: String,
		shipyardName: String,
		projectSelected: {type: Boolean, default: false}
	}
);

mongoose.model('Project', projectSchema);

// {
// 	'Id': 199, 
// 	'Name': 'SWS: H1419 CJ50 Blue Ocean IV', 
// 	'CountryCode': 'CH', 
// 	'ShipyardName': 'SWS-Waigaoqiao', 
// 	'CountryShipyard': 'CH - SWS-Waigaoqiao', 
// 	'IcProjectId': 'CHR05761', 
// 	'FORCountSingle': 0, 
// 	'FORCountGroup': 0, 
// 	'DRCountSingle': 0, 
// 	'DRCountGroup': 0
// }