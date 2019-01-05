const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { required } = require('../config.json').MONGO;

const ContactSchema = new Schema({
	name: String,
	phone: Number,
	email: String
});

const ReviewsOwnedSchema = new Schema({
	category: String,
	outerId: { type: String },
	innerId: String
});

const ImportantDateSchema = new Schema({ title: String, date: Date });

const ReviewSchema = new Schema({
	likes: { type: Number, default: 0 },
	rating: { type: Number, required },
	owner: Schema.Types.ObjectId,
	description: String
});

const GallerySchema = new Schema({
	imageName: { type: String, required },
	img_path: { type: String, required },
	album: String
});

const FacilitiesAndBraggingSchema = new Schema({
	title: String,
	description: String,
	img_cover: String
});

const TeamSchema = new Schema({
	name: String,
	description: String,
	qualification: String,
	img_path: String
});

const TimeAndDateSchema = new Schema({
	day: String,
	fromTime: String,
	toTime: String
});

const ClaimSchema = new Schema({
	listingCategory: { type: String, enum: ['tuition', 'school', 'event'] },
	listingId: String
});

const CoursesOfferedSchema = new Schema({
	title: String,
	ageGroup: String,
	duration: String,
	fee: Number,
	nextBatch: Date
});

const DiscountSchema = new Schema({
	code: { type: String, lowercase: true },
	amount: Number,
	isPercent: { type: Boolean, default: false }
});

const ResourceSchema = new Schema({
	path: { type: String, required },
	title: { type: String, required },
	students: [String],
	description: String,
	category: { type: String, enum: ['assignment', 'study meterial', 'other'], default: 'other' }
});

exports = module.exports = {
	ContactSchema,
	ReviewsOwnedSchema,
	ImportantDateSchema,
	ReviewSchema,
	GallerySchema,
	FacilitiesAndBraggingSchema,
	TeamSchema,
	TimeAndDateSchema,
	CoursesOfferedSchema,
	ClaimSchema,
	DiscountSchema,
	ResourceSchema
};
