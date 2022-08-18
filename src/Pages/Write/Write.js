import  './Write.css';
import Topbar from '../../Components/topbar/Topbar';

export default function Write() {
  return (
   <div>
    <Topbar/>
     <div class="listpgWraper">
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <div class="userccount">
            <div class="formpanel">
              <h5>Ad Information</h5>
              <div class="row">
                <div class="col-md-12">
                  <div class="formrow">
                    <input type="text" name="jobtitle" class="form-control" placeholder="Ad Title"/>
                  </div>
                </div>
                {/* <div class="col-md-4">
                  <div class="formrow">
                    <select class="form-control" name="indus">
                      <option>Ad type</option>
                      <option>I want to Sell</option>
                      <option>I want to Buy</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="formrow">
                    <select class="form-control" name="indus">
                      <option>Item type</option>
                      <option>New</option>
                      <option>Used</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="formrow">
                    <select class="form-control" name="indus">
                      <option>Property type</option>
                      <option>For Rent</option>
                      <option>For Sale</option>
                      <option>For Buy</option>
                    </select>
                  </div>
                </div> */}
                <div class="col-md-6">
                  <div class="formrow">
                    <select class="form-control" name="msalary">
                      <option>Select Catgory</option>
                      <option>Travel</option>
                      <option>Food</option>
                      <option>Life</option>
                      <option>Free Palastine</option>
                    </select>
                  </div>
                </div>
                {/* <div class="col-md-6">
                  <div class="formrow">
                    <select class="form-control" name="msalary">
                      <option>Select Sub Catgory</option>
                      <option>Vehicles</option>
                      <option>Mobiles</option>
                      <option>Furniture</option>
                      <option>Jobs</option>
                      <option>Real Estates</option>
                    </select>
                  </div>
                </div> */}
                <div class="col-md-12">
                  <div class="formrow">
                    <div class="uploadphotobx"> <i class="fa fa-upload" aria-hidden="true"></i>
                      <h4>Add photo</h4>
                      <label class="uploadBox">Click here to Upload
                        <input type="file" name="upload"/>
                      </label>
                    </div>
                    {/* <div class="fileattached"> <img src="images/ads/01.jpg" alt=""/> <span>file-name-here.jpg</span> <i
                        class="fa fa-check-circle" aria-hidden="true"></i>
                      <div class="clearfix"></div>
                    </div>
                    <div class="fileattached"> <img src="images/ads/02.jpg" alt=""/> <span>file-name-here.jpg</span> <i
                        class="fa fa-check-circle" aria-hidden="true"></i>
                      <div class="clearfix"></div>
                    </div> */}
                  </div>
                </div>
                {/* <div class="col-md-6">
                  <div class="formrow">
                    <input type="text" name="jobtitle" class="form-control" placeholder="Ad Price"/>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="formrow">
                    <input type="text" name="jobtitle" class="form-control" placeholder="Ad Location"/>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="formrow">
                    <select class="form-control" name="emptype">
                      <option>Select State</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="formrow">
                    <select class="form-control" name="emptype">
                      <option>Select City</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="formrow">
                    <select class="form-control" name="experience">
                      <option>Country</option>
                    </select>
                  </div>
                </div> */}
                <div class="col-md-12">
                  <div class="formrow">
                    <textarea class="form-control" name="jobdetail" placeholder="What's in your mind...."></textarea>
                  </div>
                </div>
              </div>
              <br/>
              <input type="submit" class="btn" value="Post"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


   </div>
  );
}

{/* <div className="write">
<img
  className="writeImg"
  src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  alt=""
/>
<form className="writeForm">
  <div className="writeFormGroup">

<select className="languages" id="lang">
  <option value="javascript">category</option>
  <option value="php">music</option>
  <option value="java">play</option>
  <option value="golang">summer</option>
  <option value="python">travel</option>
</select>

    <input id="fileInput" type="file" style={{ display: "none" }} />
    <input
      className="writeInput"
      placeholder="Title"
      type="text"
      autoFocus={true}
    />
  </div>
  <div className="writeFormGroup">
    <textarea
      className="writeInput writeText"
      placeholder="Tell your story..."
      type="text"
      autoFocus={true}
    />
  </div>
  <button className="writeSubmit" type="submit">
    Publish
  </button>
</form>
</div> */}