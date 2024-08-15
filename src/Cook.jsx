
const Cook = ({cook}) => {
   
    return (
        <div>
                  <tbody className="bg-gray-100">
      {/* row 1 */}
      <tr>
       
        <td>{cook.recipe_name}</td>
        <td>{cook.preparing_time}</td>
        <td>{cook.calories}</td>
        <td><button className="btn btn-accent">Preparing</button></td>
      </tr>
    </tbody>
        </div>
    );
};

export default Cook;