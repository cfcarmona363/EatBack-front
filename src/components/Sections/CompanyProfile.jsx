import FormInputText from "../FormInputText";
import ImageSelector from "../ImageSelector";

const CompanyProfile = () => {
  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-8 border rounded-2xl shadow-lg">
      <div className="text-center">
        <ImageSelector />
        <FormInputText title="Company name" />
        <FormInputText title="Email" />
        <FormInputText title="Phone number" />
      </div>
    </div>
  );
};

export default CompanyProfile;
