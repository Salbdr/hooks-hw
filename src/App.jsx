import "./App.css";

function App() {
  return (
    <>
      <section>
        <div className="content p-5">
          <h1>نموذج تقديم على وظيفة مطور واجهات</h1>
          <div className="field my-4">
            <input
              type="text"
              placeholder="الاسم"
              className="input input-bordered w-full"
            />
          </div>
          <div className="field my-4">
            <input
              type="text"
              placeholder="تاريخ الميلاد"
              className="input input-bordered w-full"
            />
          </div>
          <div className="field my-4">
            <select className="select select-bordered w-full">
              <option disabled selected>
                اختر المدينة التي تريد العمل بها
              </option>
              <option>الرياض</option>
              <option>جدة</option>
              <option>مكة</option>
            </select>
          </div>
          <div className="field my-4">
            <select className="select select-bordered w-full">
              <option disabled selected>
                اختر الراتب المتوقع
              </option>
              <option>3000 إلى 8000</option>
              <option>9000 إلى 13000</option>
              <option>15000 وأكثر</option>
            </select>
          </div>
          <div className="field my-4">
            <textarea
              className="textarea textarea-bordered"
              placeholder="مالذي يميزك عن الاخرين"
            ></textarea>
          </div>
          <div className="field my-4">
            <div className="text mb-2">
              هل انت متطلع على احدث التقنيات في مجال البرمجة
            </div>
            <div className="box-radio">
              <input
                type="radio"
                name="radio-2"
                className="radio radio-primary"
                checked
              />
              <span className="ml-5">نعم</span>
              <input
                type="radio"
                name="radio-2"
                className="radio radio-primary"
              />
              <span>لا</span>
            </div>
          </div>
          <div className="field my-4">
            <div className="text mb-2">هل سبق لك العمل كمطور واجهات ويب</div>
            <div className="box-radio">
              <input
                type="radio"
                name="radio-2"
                className="radio radio-primary"
                checked
              />
              <span className="ml-5">نعم</span>
              <input
                type="radio"
                name="radio-2"
                className="radio radio-primary"
              />
              <span>لا</span>
            </div>
          </div>
          <div className="field my-4">
            <div className="text mb-2">هل انت متمكن من مفهوم Git</div>
            <div className="box-radio">
              <input
                type="radio"
                name="radio-2"
                className="radio radio-primary"
                checked
              />
              <span className="ml-5">نعم</span>
              <input
                type="radio"
                name="radio-2"
                className="radio radio-primary"
              />
              <span>لا</span>
            </div>
          </div>
          <button className="btn btn-primary w-full">تقديم</button>
        </div>
      </section>
    </>
  );
}

export default App;
