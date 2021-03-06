import react from "react";

function Footer() {

    return (
        <div >

            <div class="container-fluid ">


                <footer
                    class="text-center text-lg-start text-white"
                    style={{ backgroundColor: "#1c2331" }}
                >

                    <section
                        class="d-flex justify-content-between p-4"
                        style={{ backgroundColor: "#6351ce" }}
                    >

                        <div class="me-5">
                        <h6 class="text-uppercase fw-bold">Get Connected With Us On Social Media</h6>
                        </div>

                        <div>
                            <a href="" class="text-white me-4">
                            <img className="mt-2 me-2" src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" style={{height: "30px" , width:"30px"}}></img>
                            </a>
                            
                            <a href="" class="text-white me-4">
                            <img className="mt-2 me-2" src="https://cdn-icons.flaticon.com/png/512/4494/premium/4494475.png?token=exp=1649675024~hmac=a37a3ec8c588a1000d0445189d440509" style={{height: "30px" , width:"30px"}}></img>
                            </a>
                            <a href="" class="text-white me-4">
                            <img className="mt-2 me-2" src="https://cdn-icons.flaticon.com/png/512/4494/premium/4494477.png?token=exp=1649675024~hmac=e1a3e2e25301ed215e69f04db6bf8666" style={{height: "30px" , width:"30px"}}></img>
                            </a>
                            
                        </div>

                    </section>

                    <section class="">
                        <div class="container text-center text-md-start mt-5">

                            <div class="row mt-3">

                                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                    <h6 class="text-uppercase fw-bold">kisanSEVA</h6>
                                    <hr class="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                                    <p>
                                        Here you can use rows and columns to organize your footer
                                        content. Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit.
                                    </p>
                                </div>

                                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                    <h6 class="text-uppercase fw-bold">Products</h6>
                                    <hr
                                        class="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                                    />
                                    <p>
                                        <a href="#!" class="text-white">MDBootstrap</a>
                                    </p>
                                    <p>
                                        <a href="#!" class="text-white">MDWordPress</a>
                                    </p>
                                    <p>
                                        <a href="#!" class="text-white">BrandFlow</a>
                                    </p>
                                    <p>
                                        <a href="#!" class="text-white">Bootstrap Angular</a>
                                    </p>
                                </div>



                                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                    <h6 class="text-uppercase fw-bold">Useful links</h6>
                                    <hr
                                        class="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                                    />
                                    <p>
                                        <a href="#!" class="text-white">Your Account</a>
                                    </p>
                                    <p>
                                        <a href="#!" class="text-white">Become an Affiliate</a>
                                    </p>
                                    <p>
                                        <a href="#!" class="text-white">Shipping Rates</a>
                                    </p>
                                    <p>
                                        <a href="#!" class="text-white">Help</a>
                                    </p>
                                </div>



                                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                    <h6 class="text-uppercase fw-bold">Contact</h6>
                                    <hr
                                        class="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                                    />
                                    <p><i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                                    <p><i class="fas fa-envelope mr-3"></i> info@example.com</p>
                                    <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                                    <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
                                </div>

                            </div>

                        </div>
                    </section>

                    <div
                        class="text-center p-3"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                    >
                        ?? 2020 Copyright:
                        <a class="text-white" href="https://mdbootstrap.com/"
                        >MDBootstrap.com</a
                        >
                    </div>

                </footer>


            </div>

        </div>
    );
}

export default Footer;