/* eslint-disable react/prop-types */
const AddPropertyForm = ({ handleSubmit, onSubmit, handeIneriorFacilities, hanldeOtherFacilities, hanldeoutdoorFacilities, register, errors }) => {

    const categoryOptions = ["Commercial", "Office", "Shop", "Residential", "Apartment", "Condo", "Multi Family House", "Single Family House", "Studio", "Other"]

    const districts = [
      "Dhaka", "Mymensingh", "Tangail", "Gazipur", "Manikganj", "Munshiganj", "Narayanganj", "Narsingdi",
      "Rajbari", "Faridpur", "Gopalganj", "Madaripur", "Shariatpur", "Chandpur", "Brahmanbaria", "Comilla",
      "Feni", "Khagrachari", "Lakshmipur", "Noakhali", "Rangamati", "Bandarban", "Chittagong", "Cox's Bazar",
      "Rangamati", "Khulna", "Bagerhat", "Chuadanga", "Jessore", "Jhenaidah", "Khulna", "Kushtia", "Magura",
      "Meherpur", "Narail", "Satkhira", "Barisal", "Barguna", "Bhola", "Jhalokati", "Patuakhali", "Pirojpur",
      "Bogra", "Joypurhat", "Naogaon", "Natore", "Chapainawabganj", "Pabna", "Rajshahi", "Sirajganj", "Dinajpur",
      "Gaibandha", "Kurigram", "Lalmonirhat", "Nilphamari", "Panchagarh", "Rangpur", "Thakurgaon", "Habiganj",
      "Moulvibazar", "Sylhet", "Sunamganj", "Jamalpur", "Sherpur"
    ]
  
    const upazilas = [
      "Dhaka", "Gazipur", "Gopalganj", "Kishoreganj", "Madaripur", "Manikganj", "Munshiganj", "Narayanganj", "Narsingdi", "Rajbari",
      "Shariatpur", "Tangail", "Dhamrai", "Dohar", "Keraniganj", "Nawabganj", "Savar", "Tongi", "Bhairab", "Bajitpur",
      "Belabo", "Monohardi", "Nandail", "Pakundia", "Tarail", "Araihazar", "Bandar", "Narayanganj Sadar", "Rupganj", "Siddhirganj",
      "Sonargaon", "Bhanga", "Faridpur Sadar", "Madhukhali", "Nagarkanda", "Sadarpur", "Alfadanga", "Kotalipara", "Gopalganj Sadar", "Maksudpur",
      "Tungipara", "Bajitpur", "Itna", "Karimganj", "Katiadi", "Kishoreganj Sadar", "Kuliarchar", "Mithamain", "Nikli", "Pakundia",
      "Tarail", "Madaripur Sadar", "Rajoir", "Shibchar", "Manikganj Sadar", "Shibalaya", "Singair", "Saturia", "Daulatpur", "Gangni",
      "Harirampur", "Kamarkhanda", "Baliakandi", "Ghior", "Kalukhali", "Rajbari Sadar", "Naria", "Zajira", "Ghatail", "Gopalpur",
      "Kalihati", "Madhupur", "Mirzapur", "Nagarpur", "Sakhipur", "Basail", "Bhuapur", "Delduar", "Ghatail", "Gopalpur",
      "Kalihati", "Madhupur", "Mirzapur", "Nagarpur", "Sakhipur", "Banaripara", "Gaurnadi", "Gopalganj Sadar", "Kotalipara", "Muksudpur",
      "Jamalpur", "Mymensingh", "Netrokona", "Sherpur", "Austagram", "Bhaluka", "Gaffargaon", "Gauripur", "Haluaghat", "Isshorgonj",
      "Muktagachha", "Nandail", "Phulpur", "Tarakanda", "Araihazar", "Bajitpur", "Bhairab", "Hossainpur", "Itna", "Karimganj",
      "Katiadi", "Kuliarchar", "Mithamain", "Nikli", "Pakundia", "Sarail", "Bhaluka", "Dhobaura", "Fulbaria", "Gafargaon",
      "Gauripur", "Haluaghat", "Ishwarganj", "Mymensingh Sadar", "Nandail", "Trishal", "Bhaluka", "Dhobaura", "Fulbaria", "Gafargaon",
      "Gauripur", "Gouripur", "Haluaghat", "Ishwarganj", "Muktagachha", "Myemensingh Sadar", "Nandail", "Phulpur", "Tarail", "Trishal",
      "Austagram", "Bajitpur", "Bhairab", "Hossainpur", "Itna", "Karimganj", "Katiadi", "Kuliarchar", "Mithamain", "Nikli",
      "Pakundia", "Raipura", "Shibpur", "Tengail",
      "Bandarban Sadar", "Lama", "Alikadam", "Rowangchhari", "Ruma", "Thanchi", "Naikhongchhari", "Bandarban Sadar", "Lama", "Alikadam",
      "Rowangchhari", "Ruma", "Thanchi", "Naikhongchhari", "Bancharampur", "Brahmanpara", "Burichong", "Chandina", "Chauddagram", "Daudkandi",
      "Debidwar", "Homna", "Barura", "Muradnagar", "Nangalkot", "Comilla Adarsha Sadar", "Chandina", "Chauddagram", "Daudkandi", "Debidwar",
      "Homna", "Laksam", "Muradnagar", "Nangalkot", "Barura", "Brahmanpara", "Burichang", "Comilla Sadar Dakshin", "Comilla Sadar Uttar", "Daudkandi",
      "Muradnagar", "Nangalkot", "Barura", "Brahmanpara", "Burichong", "Chandina", "Chauddagram", "Debidwar", "Homna", "Laksam",
      "Monohorgonj", "Comilla Sadar Dakshin", "Chandina", "Daudkandi", "Muradnagar", "Nangalkot", "Barura", "Brahmanpara", "Burichong", "Chandina",
      "Chauddagram", "Daudkandi", "Debidwar", "Homna", "Laksam", "Muradnagar", "Nangalkot", "Titas", "Daganbhuiyan", "Feni Sadar", "Parshuram",
      "Sonagazi", "Chhagalnaiya", "Daganbhuiyan", "Fulgazi", "Parshuram", "Sonagazi", "Feni Sadar", "Chhagalnaiya", "Daganbhuiyan", "Fulgazi",
      "Parshuram", "Sonagazi", "Belabo", "Monohardi", "Nandail", "Pakundia", "Tarail",
      "Bagerhat Sadar", "Chitalmari", "Fakirhat", "Kachua", "Mollahat", "Mongla", "Morrelganj", "Rampal", "Sarankhola", "Bagerhat Sadar",
      "Chitalmari", "Fakirhat", "Kachua", "Mollahat", "Mongla", "Morrelganj", "Rampal", "Sarankhola", "Bagerhat Sadar", "Chitalmari",
      "Fakirhat", "Kachua", "Mollahat", "Mongla", "Morrelganj", "Rampal", "Sarankhola", "Fultala", "Morelganj", "Paikgachha",
      "Rupsa", "Chuadanga Sadar", "Alamdanga", "Damurhuda", "Doulatganj", "Jessore Sadar", "Bagherpara", "Chaugachha", "Jessore Sadar", "Jhikargachha",
      "Keshabpur", "Manirampur", "Abhaynagar", "Chuadanga Sadar", "Alamdanga", "Damurhuda", "Doulatganj", "Jhikargachha", "Keshabpur", "Jessore Sadar",
      "Bagherpara", "Chaugachha", "Jhikargachha", "Keshabpur", "Manirampur", "Bheramara", "Khoksa", "Kumarkhali", "Kushtia Sadar", "Daulatpur",
      "Kumarkhali", "Kushtia Sadar", "Mirpur", "Daulatpur", "Kumarkhali", "Kushtia Sadar", "Mirpur", "Jhenaidah Sadar", "Kaliganj",
      "Barguna Sadar", "Amtali", "Bamna", "Barguna Sadar", "Amtali", "Bamna", "Barguna Sadar", "Amtali", "Bamna", "Barguna Sadar",
      "Amtali", "Bamna", "Betagi", "Patharghata", "Barisal Sadar", "Agailjhara", "Babuganj", "Bakerganj", "Banari Para", "Gaurnadi",
      "Hizla", "Mehendiganj", "Muladi", "Wazirpur", "Muladi", "Barisal Sadar", "Babuganj", "Bakerganj", "Banari Para", "Gaurnadi",
      "Hizla", "Mehendiganj", "Wazirpur", "Bhola Sadar", "Burhanuddin", "Char Fasson", "Daulatkhan", "Lalmohan", "Manpura", "Tazumuddin",
      "Bakerganj", "Banari Para", "Gaurnadi", "Hizla", "Mehendiganj", "Muladi", "Wazirpur",
      "Adamdighi", "Bogra Sadar", "Dhunat", "Dhupchanchia", "Gabhindrapur", "Kahaloo", "Nandigram", "Sariakandi", "Shibganj", "Sonatola",
      "Akkelpur", "Bogra Sadar", "Dupchachia", "Gurudaspur", "Kahaloo", "Nandigram", "Sherpur", "Shibganj", "Sonatala", "Sariakandi",
      "Bogra Sadar", "Dupchachia", "Gabtali", "Kahaloo", "Nandigram", "Sariakandi", "Sherpur", "Shibganj", "Sonatala", "Bholahat",
      "Gomastapur", "Nachole", "Nawabganj Sadar", "Shibganj", "Akkelpur", "Gomastapur", "Nawabganj Sadar", "Shibganj", "Akkelpur", "Gomastapur",
      "Nawabganj Sadar", "Shibganj", "Godagari", "Mohanpur", "Paba", "Rajshahi Sadar", "Bagha", "Bagmara", "Charghat", "Durgapur",
      "Godagari", "Mohanpur", "Paba", "Tanore", "Bagha", "Bagmara", "Charghat", "Durgapur", "Godagari", "Mohanpur", "Paba",
      "Tanore", "Boalia", "Matihar", "Rajpara", "Shah Mokhdum",
      "Badarganj", "Mithapukur", "Pirganj", "Rangpur Sadar", "Taraganj", "Gangachara", "Kaunia", "Pirgachha", "Pirganj", "Rangpur Sadar",
      "Taraganj", "Badarganj", "Mithapukur", "Rangpur Sadar", "Kaunia", "Gangachara", "Pirgachha", "Rangpur Sadar", "Pirganj", "Mithapukur",
      "Rangpur Sadar", "Badarganj", "Taraganj", "Pirganj", "Badarganj", "Mithapukur", "Pirganj", "Rangpur Sadar", "Taraganj", "Gangachara",
      "Kaunia", "Pirgachha", "Biral", "Dimla", "Domar", "Jaldhaka", "Kishoreganj", "Nilphamari Sadar", "Saidpur", "Syedpur",
      "Baliadangi", "Haripur", "Panchagarh Sadar", "Tetulia", "Atwari", "Boda", "Panchagarh Sadar", "Tetulia", "Boda", "Debiganj",
      "Panchagarh Sadar", "Tetulia", "Boda", "Debiganj", "Panchagarh Sadar", "Tetulia",
      "Balaganj", "Beanibazar", "Bishwanath", "Companiganj", "Fenchuganj", "Golapganj", "Gowainghat", "Jaintiapur", "Kanaighat", "Sylhet Sadar",
      "Zakiganj", "Balaganj", "Beanibazar", "Bishwanath", "Companiganj", "Fenchuganj", "Golapganj", "Gowainghat", "Jaintiapur", "Kanaighat",
      "Sylhet Sadar", "Zakiganj", "Dakshin Surma", "Golapganj", "Jaintiapur", "Kanaighat", "South Surma", "Sylhet Sadar", "Bianibazar",
      "Golapganj", "Jaintiapur", "South Surma", "Zakiganj", "Bianibazar", "Golapganj", "Jaintiapur", "South Surma", "Zakiganj"
    ]
  
    const divisions = [
      "Dhaka Division",
      "Chattogram Division",
      "Khulna Division",
      "Rajshahi Division",
      "Barishal Division",
      "Sylhet Division",
      "Rangpur Division",
      "Mymensingh Division"
    ];
    return (
        <div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="card-body lg:w-8/12 mx-auto shadow-[0_0_20px_#E6E6E6] rounded-xl"
            >
                {/* Property Description */}
                <div>
                    <h3 className="font-semibold mb-4">Property Description</h3>
                    <div className="input-form">
                        <label className="label">
                            <span className="label-text">Property Title</span>
                        </label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Property Title"
                            required
                            className="input-field"
                            {...register("propertyTitle", { required: true })}
                        />
                        {errors.propertyTitle && (
                            <p className="text-red-500 mt-4">Please Add Property Title</p>
                        )}
                    </div>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Property Description</span>
                        </div>
                        <textarea className="textarea border-2 bg-gray-100 focus:bg-white focus:outline-none h-24" placeholder="Property Description"></textarea>
                    </label>
                </div>
                {/* Property Prices */}
                <div >
                    <h1 className="font-semibold my-4">Property Prices</h1>
                    <div className="input-container">
                        <div className="input-form">
                            <label className="label">
                                <span className="label-text">Min Price</span>
                            </label>
                            <input
                                type="number"
                                name="location"
                                placeholder="min Price"
                                className="input-field"
                                {...register("minPrice", { required: true })}
                            />
                            {errors.minPrice && (
                                <p className="text-red-500 mt-4">Please Add a Min Price</p>
                            )}
                        </div>
                        <div className="input-form">
                            <label className="label">
                                <span className="label-text">Max Price</span>
                            </label>
                            <input
                                type="number"
                                name="location"
                                placeholder="max Price"
                                className="input-field"
                                {...register("maxPrice", { required: true })}
                            />
                            {errors.maxPrice && (
                                <p className="text-red-500 mt-4">Please Add a Max Price</p>
                            )}
                        </div>

                    </div>
                    <div className="input-container">
                        <div className="input-form">
                            <label className="label">
                                <span className="label-text">Homeowners Association Fee(monthly)</span>
                            </label>
                            <input
                                type="number"
                                name="location"
                                placeholder="min Price"
                                className="input-field"
                                {...register("associationFee", { required: true })}
                            />
                            {errors.associationFee && (
                                <p className="text-red-500 mt-4">Homeowners Association Fee(monthly)</p>
                            )}
                        </div>
                        <div className="input-form">
                            <label className="label">
                                <span className="label-text">Yearly Tax</span>
                            </label>
                            <input
                                type="number"
                                name="location"
                                placeholder="max Price"
                                className="input-field"
                                {...register("yearlyTax", { required: true })}
                            />
                            {errors.yearlyTax && (
                                <p className="text-red-500 mt-4">Please Add a Yearly Tax Rate</p>
                            )}
                        </div>
                    </div>
                </div>
                {/* Property Category */}
                <div>
                    <h1 className="font-semibold my-4">Select Categories</h1>
                    <div className="input-container">
                        <select
                            className="select-input flex-1"
                        >
                            <option className="font-bold " disabled value={""}>
                                Category
                            </option>
                            {categoryOptions?.map((category, index) => <option key={index} value={category}>{category}</option>)}
                        </select>
                        <select
                            className="select-input flex-1"
                        >
                            <option className="font-bold " disabled value={""}>
                                Listed On
                            </option>
                            <option value={"rent"}>For Rent</option>
                            <option value={"sell"}>For Sell</option>
                        </select>
                    </div>
                </div>
                {/* Property Location */}
                <div >
                    <h1 className="font-semibold my-4">Property Location</h1>
                    <div className="input-form">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input
                            type="text"
                            name="location"
                            placeholder="Enter Address"
                            className="input-field"
                            {...register("address", { required: true })}
                        />
                        {errors.address && (
                            <p className="text-red-500 mt-4">Please Add Property Address</p>
                        )}
                    </div>
                    {/* Division And District */}
                    <div className="input-container">
                        <select
                            className="select-input flex-1"
                            defaultValue={"Upazila"}
                        >
                            <option className="font-bold " disabled value={"Upazila"}>
                                Select Division
                            </option>
                            {divisions?.map((division, index) => <option key={index} value={division}>{division}</option>)}
                        </select>
                        <select
                            className="select-input flex-1 my-4"
                            defaultValue={"Districts"}
                        >
                            <option className="font-bold " disabled value={"Districts"}>
                                Select Districts
                            </option>
                            {districts?.map((district, index) => <option key={index} value={district}>{district}</option>)}
                        </select>

                    </div>
                    {/* Upozilla And Zip */}
                    <div className="input-container">
                        <select
                            className="select-input flex-1"
                            defaultValue={"Upazila"}
                        >
                            <option className="font-bold " disabled value={"Upazila"}>
                                Select Upazila
                            </option>
                            {upazilas?.map((upazila, index) => <option key={index} value={upazila}>{upazila}</option>)}
                        </select>
                        {/* zip */}
                        <input
                            type="number"
                            name="location"
                            placeholder="Property Location"
                            className="input-field flex-1"
                            {...register("zip", { required: true })}
                        />
                        {errors.zip && (
                            <p className="text-red-500 mt-4">Add A Zip Code</p>
                        )}
                    </div>
                    {/* Longitutue and Latitude */}
                    <div className="input-container my-4">
                        <div className="input-form">
                            <label className="label">
                                <span className="label-text">Latitude (for Google Maps)</span>
                            </label>
                            <input
                                type="number"
                                name="location"
                                placeholder="Latitude (for Google Maps)"
                                className="input-field"
                                {...register("minPrice", { required: true })}
                            />
                            {errors.minPrice && (
                                <p className="text-red-500 mt-4">Please Add a Min Price</p>
                            )}
                        </div>
                        <div className="input-form">
                            <label className="label">
                                <span className="label-text">Longitude (for Google Maps)</span>
                            </label>
                            <input
                                type="number"
                                name="location"
                                placeholder="Longitude (for Google Maps)"
                                className="input-field"
                                {...register("minPrice", { required: true })}
                            />
                            {errors.minPrice && (
                                <p className="text-red-500 mt-4">Please Add a Min Price</p>
                            )}
                        </div>
                    </div>
                </div>
                {/*  */}
                <div>
                    <h1 className="font-semibold my-4">Property Detail</h1>
                    <div className="input-container">
                        <div className="input-form">
                            <label className="label">
                                <span className="label-text">Size in ft2 (*only numbers)</span>
                            </label>
                            <input
                                type="number"
                                name="location"
                                placeholder="Size in ft2 (*only numbers)"
                                className="input-field"
                                {...register("minPrice", { required: true })}
                            />
                            {errors.minPrice && (
                                <p className="text-red-500 mt-4">Please Add a Min Price</p>
                            )}
                        </div><div className="input-form">
                            <label className="label">
                                <span className="label-text">Rooms (*only numbers)</span>
                            </label>
                            <input
                                type="number"
                                name="location"
                                placeholder="Rooms (*only numbers)"
                                className="input-field"
                                {...register("minPrice", { required: true })}
                            />
                            {errors.minPrice && (
                                <p className="text-red-500 mt-4">Please Add a Min Price</p>
                            )}
                        </div>
                    </div>
                    <div className="input-container">
                        <div className="input-form">
                            <label className="label">
                                <span className="label-text">Bedrooms (*only numbers)</span>
                            </label>
                            <input
                                type="number"
                                name="location"
                                placeholder="Bedrooms (*only numbers)"
                                className="input-field"
                                {...register("minPrice", { required: true })}
                            />
                            {errors.minPrice && (
                                <p className="text-red-500 mt-4">Please Add a Min Price</p>
                            )}
                        </div><div className="input-form">
                            <label className="label">
                                <span className="label-text">Bathrooms (*only numbers)</span>
                            </label>
                            <input
                                type="number"
                                name="location"
                                placeholder="Bathrooms (*only numbers)"
                                className="input-field"
                                {...register("minPrice", { required: true })}
                            />
                            {errors.minPrice && (
                                <p className="text-red-500 mt-4">Please Add a Min Price</p>
                            )}
                        </div>
                    </div>
                    <div className="input-container">
                        <div className="input-form">
                            <label className="label">
                                <span className="label-text">Year Built (*numeric)</span>
                            </label>
                            <input
                                type="number"
                                name="location"
                                placeholder="Year Built (*numeric)"
                                className="input-field"
                                {...register("minPrice", { required: true })}
                            />
                            {errors.minPrice && (
                                <p className="text-red-500 mt-4">Please Add a Min Price</p>
                            )}
                        </div><div className="input-form">
                            <label className="label">
                                <span className="label-text">
                                    Estimated Taxes (*text)</span>
                            </label>
                            <input
                                type="number"
                                name="location"
                                placeholder="Estimated Taxes (*text)"
                                className="input-field"
                                {...register("minPrice", { required: true })}
                            />
                            {errors.minPrice && (
                                <p className="text-red-500 mt-4">Please Add a Min Price</p>
                            )}
                        </div>
                    </div>
                </div>
                {/* Checkbox */}
                <div>
                    <h1 className="font-semibold my-4">Amenities and Features</h1>
                    <h3 className="font-medium my-4">Interior Details</h3>
                    <div className="flex items-center gap-8">
                        <div className="flex gap-2">
                            <input type="checkbox" value={"Equipped Kitchen"} onChange={handeIneriorFacilities} className="checkbox checkbox-error" />
                            <span>Equipped Kitchen</span>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" value={"Fireplace"} onChange={handeIneriorFacilities} className="checkbox checkbox-error" />
                            <span>Fireplace</span>
                        </div> <div className="flex gap-2">
                            <input type="checkbox" value={"Hot Bath"} onChange={handeIneriorFacilities} className="checkbox checkbox-error" />
                            <span>Hot Bath</span>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" value={"Gym"} onChange={handeIneriorFacilities} className="checkbox checkbox-error" />
                            <span>Gym</span>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" value={"Laundry"} onChange={handeIneriorFacilities} className="checkbox checkbox-error" />
                            <span>Laundry</span>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" value={"Media Room"} onChange={handeIneriorFacilities} className="checkbox checkbox-error" />
                            <span>Media Room</span>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="font-medium my-4">Outdoor Detail</h1>
                    <div className="flex items-center gap-8">
                        <div className="flex gap-2">
                            <input type="checkbox" value={"Back yard"} onChange={hanldeoutdoorFacilities} className="checkbox checkbox-error" />
                            <span>Back yard</span>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" value={"Basketball court"} onChange={hanldeoutdoorFacilities} className="checkbox checkbox-error" />
                            <span>Basketball court</span>
                        </div> <div className="flex gap-2">
                            <input type="checkbox" value={"Chair Accessible"} onChange={hanldeoutdoorFacilities} className="checkbox checkbox-error" />
                            <span>Chair Accessible</span>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" value={"Garage Attached"} onChange={hanldeoutdoorFacilities} className="checkbox checkbox-error" />
                            <span>Garage Attached</span>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" value={"Pool"} onChange={hanldeoutdoorFacilities} className="checkbox checkbox-error" />
                            <span>Pool</span>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" value={"Water"} onChange={hanldeoutdoorFacilities} className="checkbox checkbox-error" />
                            <span>Water</span>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="font-medium my-4">Other Features</h1>
                    <div className="flex items-center gap-8">
                        <div className="flex gap-2">
                            <input type="checkbox" value={"Elevator"} onChange={hanldeOtherFacilities} className="checkbox checkbox-error" />
                            <span>Elevator</span>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" value={"Washer and dryer"} onChange={hanldeOtherFacilities} className="checkbox checkbox-error" />
                            <span>Washer and dryer</span>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" value={"WiFi"} onChange={hanldeOtherFacilities} className="checkbox checkbox-error" />
                            <span>WiFi</span>
                        </div>
                    </div>
                </div>
                {/* Add Property Button */}
                <button
                    className="relative px-8 py-2 mt-6  bg-[#072730] text-white  isolation-auto z-10 border rounded-full border-dashed border-main 
             before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-main hover:text-white before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
                >
                    Add Property
                </button>
            </form>
        </div>
    );
};

export default AddPropertyForm;